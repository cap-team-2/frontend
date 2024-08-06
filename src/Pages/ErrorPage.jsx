// ErrorPage.jsx
import { useNavigate } from 'react-router-dom'

export default function FourOFour() {
  const navigate = useNavigate()

  return (
    <div id="error-page" className="bg-light fixed top-0 h-full w-full z-10">
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-80%] text-center grid gap-4">
        <h1 className="text-3xl">Page Not Found</h1>
        <p className="text-xl">
          We couldn't find the page you were looking for.
        </p>
        <button
          onClick={() => navigate('/')}
          className="text-green font-semibold border rounded w-fit p-2 justify-self-center shadow hover:shadow-none"
        >
          Back Home
        </button>
      </div>
    </div>
  )
}
