import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import bcrypt from 'bcrypt';
import User from '@/models/User';
import connectDB from '@/lib/connectDB';

const options = NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                await connectDB();

                const { email, password } = credentials;

                const user = await User.findOne({ email });

                if (!user) {
                    throw new Error('Email Not Found');
                }

                const isPasswordMatched = await bcrypt.compare(password, user.password);

                if (!isPasswordMatched) {
                    throw new Error('Password does not match');
                }

                return user;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async signIn({ account, profile }) {
            if (account.provider === 'google' || account.provider === 'github') {
                // Establish database connection
                await connectDB();
                try {
                    const user = await User.findOne({ email: profile.email });

                    if (!user) {
                        const newUser = {
                            name: profile.name,
                            email: profile.email,
                            image: {
                                profileURL: profile.picture
                            }
                        };

                        await User.create(newUser);
                    }
                } catch (error) {
                    console.error('Error signing in:', error);
                    return false;
                }
                return true;
            }
            return true;
        }
    },

    secret: process.env.NEXTAUTH_SECRET
});

export { options as GET, options as POST };
