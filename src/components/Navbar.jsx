import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <span className="ml-3 text-xl">CODREMEX</span>
          </Link>

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/nosotros">
              <span className="mr-5 hover:text-gray-900">Nosotros</span>
            </Link>
            <Link href="/productos">
              <span className="mr-5 hover:text-gray-900">Productos</span>
            </Link>
            <Link href="/contacto">
              <span className="mr-5 hover:text-gray-900">Contacto</span>
            </Link>
          </nav>
          <button
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            onClick={() => router.push("/login")}
          >
            Mi Cuenta
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
