"use client";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const RadixProvider = ({ children }) => {
    return (
        <Theme>
            {children}
        </Theme>
    );
};

export default RadixProvider;