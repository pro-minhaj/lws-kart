"use client";
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton } from "next-share";

const ShareSocialMedia = ({ id, lang, description, name }) => {

    return (
        <div className='flex gap-3 mt-4'>
            <FacebookShareButton
                url={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/${lang}/${id}`}
                quote={description}
                hashtag={'#LWS-Kart'}
            >
                <FacebookIcon size={32} round />
            </FacebookShareButton>

            <TwitterShareButton
                url={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/${lang}/${id}`}
                title={name}
            >
                <TwitterIcon size={32} round />
            </TwitterShareButton>

            <LinkedinShareButton url={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/${lang}/${id}`}>
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>
        </div>
    );
};

export default ShareSocialMedia;