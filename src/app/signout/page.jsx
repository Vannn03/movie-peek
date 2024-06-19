import { signOut } from '@/auth'
import Link from 'next/link'

export default function SignOutPage() {
    return (
        <div className="flex h-dvh items-center justify-center bg-color-white">
            <div className="flex w-80 flex-col gap-6 rounded-xl border bg-white p-8 shadow-lg sm:w-[500px] sm:gap-8 sm:p-12">
                <h5 className="text-color-primary sm:text-lg">
                    Are you sure you want to sign out?
                </h5>
                <div className="flex items-center justify-between gap-4">
                    <Link
                        href={'/'}
                        className="flex w-1/2 items-center justify-center gap-2 rounded-full py-3 text-color-primary/75 transition-all hover:bg-color-primary/5 sm:text-lg"
                    >
                        Cancel
                    </Link>
                    <form
                        action={async () => {
                            'use server'
                            await signOut({ redirectTo: '/' })
                        }}
                        className="w-1/2"
                    >
                        <button
                            type="submit"
                            className="flex w-full items-center justify-center gap-2 rounded-full bg-color-accent py-3 text-color-white transition-all hover:brightness-105 sm:text-lg"
                        >
                            Sign out
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
