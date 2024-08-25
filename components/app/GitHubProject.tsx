import React from "react"

export default function GitHubProject() {
  return (
    <div>
      <div className="not-prose my-5 rounded-xl border border-gray-200 bg-white transition-colors hover:border-gray-700">
        <a
          href="https://github.com/twitter/the-algorithm"
          target="_blank"
          rel="noreferrer noopener"
          className="block p-6"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-2xl font-normal">
                twitter/
                <span className="font-bold text-gray-800">the-algorithm</span>
              </p>
              <p className="mt-2 text-sm font-normal text-gray-500"></p>
            </div>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="#71717A"
              className="h-8 w-8 sm:h-10 sm:w-10"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
              ></path>
            </svg>
          </div>
          <div className="flex items-end justify-between">
            <div className="mt-4 flex items-center space-x-6">
              <div className="flex items-start space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="mt-1.5"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <div>
                  <p className="font-semibold text-gray-600">0</p>
                  <p className="text-xs font-normal text-gray-500">Stars</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="mt-1.5"
                >
                  <circle cx="12" cy="18" r="3"></circle>
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="18" cy="6" r="3"></circle>
                  <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"></path>
                  <path d="M12 12v3"></path>
                </svg>
                <div>
                  <p className="font-semibold text-gray-600">0</p>
                  <p className="text-xs font-normal text-gray-500">Forks</p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}
