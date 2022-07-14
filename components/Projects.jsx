import React from "react";

const Projects = ({ posts }) => {
  return (
    <div
      id="projects"
      className="scroll-mt-16 w-full  p-10 items-center py-16 bg-gray-100 dark:bg-gray-800"
    >
      <h1 className="container mx-auto text-5xl md:text-9xl font-bold md:text-left text-gray-700 dark:text-gray-50">
        Projects.
      </h1>
      <div className="container mx-auto space-y-4 lg:space-y-0 lg:gap-6 lg:grid lg:grid-cols-3 py-10 auto-col-min">
        {posts.map((item) => (
          <div className="" key={item.frontmatter.title}>
            <div className="rounded-lg shadow-md  grayscale hover:grayscale-0 dark:grayscale-0 first-letter:hover:shadow-xl hover:scale-105 transition-transform bg-white dark:bg-gray-600 max-w-md overflow-hidden">
              <a
                href={item.frontmatter.live || item.frontmatter.github || "#!"}
                target="_blank"
                rel="noreferrer "
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  src={item.frontmatter.coverImage}
                  alt=""
                  className="h-60 w-full object-cover object-center"
                />
              </a>
              <div className="p-3">
                <h5 className="text-gray-900 dark:text-white text-2xl font-bold mb-2">
                  {item.frontmatter.title}
                </h5>
                <p className="text-gray-700 dark:text-gray-100 text-sm mb-4">
                  {item.frontmatter.excerpt}
                </p>
                <div className="flex justify-between">
                  <p className="flex space-x-1">
                    {item.frontmatter.tech?.map((each) => (
                      <span
                        className="px-3 py-1  border rounded-md text-slate-500 dark:text-slate-200 dark:border-slate-300 capitalize text-xs"
                        key={each}
                      >
                        {each}
                      </span>
                    ))}
                  </p>
                  <div className="flex">
                    {item.frontmatter.github ? (
                      <a
                        target="_blank"
                        href={item.frontmatter.github}
                        rel="noreferrer "
                        className="inline-flex mr-2"
                        title="Github"
                      >
                        <svg
                          height="24"
                          aria-hidden="true"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="20"
                          data-view-component="true"
                          className="octicon octicon-mark-github v-align-middle"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                          ></path>
                        </svg>
                      </a>
                    ) : (
                      ""
                    )}

                    {item.frontmatter.live ? (
                      <a
                        target="_blank"
                        href={item.frontmatter.live}
                        rel="noreferrer "
                        title="Link"
                      >
                        <svg
                          className="w-6 h-6 stroke-black"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          ></path>
                        </svg>
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
