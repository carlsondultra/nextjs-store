import Link from "next/link";

export default function SuccessPage() {
    return (
        <div>
            Payment Successful!<br></br>
            <Link href={'/'}>Go Back Home</Link>
        </div>
    )
}