export default function Footer(){
    return(
        <>
        <footer className="w-full flex justify-center items-center bg-black py-6 text-sm text-gray-500 border-t border-gray-700">
            <div className="w-[80%]">
              © {new Date().getFullYear()} Haris. Built with Next.js & Tailwind CSS.
            </div>
        </footer>
        </>
    )
}