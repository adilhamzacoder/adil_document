import { SignUp } from "@clerk/nextjs";


const SignUpPage = () => {
    return (
        <main className="h-screen w-full flex items-center justify-center">
            <SignUp></SignUp>
        </main>
    );
};

export default SignUpPage;