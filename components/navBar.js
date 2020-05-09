import Link from 'next/link'


export default function NavBar(){
    return (
        <div>
            <ul>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                <Link href="/products"><a>Products</a></Link>
                </li>
                <li>
                    <Link href="/about"><a>About</a></Link>
                </li>
                <li>
                    <Link href="/contact"><a>Contact</a></Link>
                </li>
            </ul>
        </div>
    )
}