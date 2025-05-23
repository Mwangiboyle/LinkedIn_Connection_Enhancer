"use client";
import Link from "next/link";

export default function Signup2() {
    const handleGoogleSignUp = () => {
        // Redirect to your FastAPI backend's Google OAuth endpoint
        window.location.href = "https://adaptable-freedom-production.up.railway.app/auth/google";
    };

    const handleEmailSignUp = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const user = {
            email: formData.get("email"),
            password: formData.get("password"),
        };

        try {
            const response = await fetch("https://adaptable-freedom-production.up.railway.app/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Sign-up successful:", data);
                // Redirect to the dashboard or login page
                window.location.href = "/dashboard";
            } else {
                const error = await response.json();
                console.error("Sign-up failed:", error);
            }
        } catch (error) {
            console.error("Error during sign-up:", error);
        }
    };

    return (
        <div className="section py-6 sm:py-9">
            <div className="container max-w-xl">
                <div className="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
                    <h1 className="h3 sm:h1 m-0">Sign up</h1>
                    <div className="panel w-100 sm:w-350px">
                        <form onSubmit={handleEmailSignUp} className="vstack gap-2">
                            <input
                                className="form-control h-48px w-full bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                                type="text"
                                placeholder="Full name"
                                required
                            />
                            <input
                                className="form-control h-48px w-full bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                                type="email"
                                placeholder="Your email"
                                required
                            />
                            <input
                                className="form-control h-48px w-full bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                                type="password"
                                placeholder="Password"
                                required
                            />
                            <input
                                className="form-control h-48px w-full bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                                type="password"
                                placeholder="Re-enter Password"
                                required
                            />
                            <div className="hstack text-start">
                                <div className="form-check text-start rtl:text-end">
                                    <input
                                        id="uc_form_check_terms"
                                        className="form-check-input rounded-0 bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                                        type="checkbox"
                                        required
                                    />
                                    <label
                                        htmlFor="uc_form_check_terms"
                                        className="hstack justify-between form-check-label fs-6"
                                    >
                                        I read and accept the
                                        <Link
                                            href={`/page-terms`}
                                            className="uc-link ltr:ms-narrow rtl:me-narrow"
                                        >
                                            terms of use
                                        </Link>
                                        .
                                    </label>
                                </div>
                            </div>
                            <button
                                className="btn btn-primary btn-md text-white mt-2"
                                type="submit"
                            >
                                Create an account
                            </button>
                        </form>

                        {/* Add the Google Sign-Up Button */}
                        <button
                            onClick={handleGoogleSignUp}
                            className="btn btn-outline-primary btn-md mt-2 w-full flex items-center justify-center gap-2"
                        >
                            <img
                                src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
                                alt="Google Logo"
                                className="w-5 h-5"
                            />
                            Sign up with Google
                        </button>
                    </div>
                    <p>
                        Already have an account?
                        <Link className="uc-link" href={`/sign-in`}>
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
