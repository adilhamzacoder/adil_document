import Header from '@/components/Header';
import { Editor } from '@/components/editor/Editor';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import React from 'react';

const Document = () => {
    return (
        <div>
            <Header>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </Header>
            <Editor />
        </div>
    );
};

export default Document; 