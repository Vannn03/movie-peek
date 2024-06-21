import DashboardUserImage from '@/components/OptimizedImage/DashboardUserImage'
import { authUserSessionServer } from '@/libs/auth-libs'
import Link from 'next/link'

const Page = async () => {
    const user = await authUserSessionServer()

    return (
        <div className="flex h-[92.2dvh] items-center justify-center bg-color-primary">
            <div className="flex flex-col items-center gap-12 px-6">
                <div className="flex flex-col items-center gap-8">
                    <DashboardUserImage user={user} />
                    <h1 className="text-center text-2xl font-semibold sm:text-3xl">
                        {user?.name}
                    </h1>
                </div>
                <div className="flex flex-col gap-4 text-center">
                    <Link
                        href={'dashboard/collections'}
                        className="rounded-sm bg-color-secondary px-8 py-4 text-sm font-medium transition-all hover:brightness-105 sm:text-base md:text-lg"
                    >
                        My Collections
                    </Link>
                    <Link
                        href={'dashboard/comments'}
                        className="rounded-sm bg-color-secondary px-24 py-4 text-sm font-medium transition-all hover:brightness-105 sm:text-base md:text-lg"
                    >
                        My Comments
                    </Link>
                    <Link
                        href={'/api/auth/signout?callbackUrl=/'}
                        className="rounded-sm bg-color-light-accent px-24 py-4 text-sm font-medium transition-all hover:brightness-105 sm:text-base md:text-lg"
                    >
                        Sign out
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Page
