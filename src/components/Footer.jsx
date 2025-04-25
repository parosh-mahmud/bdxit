// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Bdxit. All rights reserved.</p>
        <div className="space-x-4 text-sm">
          <a href="/terms" className="hover:text-orange-400">Terms</a>
          <a href="/privacy" className="hover:text-orange-400">Privacy</a>
          <a href="/contact" className="hover:text-orange-400">Contact</a>
        </div>
      </div>
    </footer>
  )
}
