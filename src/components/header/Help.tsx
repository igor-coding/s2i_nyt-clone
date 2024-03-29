// OPT: There are elements that are too repetitive
export default function Help() {
  return (
    <div className="z-20 absolute top-8 ml-28 h-64 w-96 border-2 border-black dark:border-white bg-white dark:bg-black shadow-2xl rounded-xl">
      <div className="h-full w-full p-10 flex flex-col justify-center items-start">
        <h1 className="pb-8 text-3xl font-bold text-black dark:text-white">
          Keyboard Shortcuts
        </h1>
        <div className="text-xl text-black dark:text-white">
          <ul>
            <li>
              <code className="px-2 rounded bg-neutral-200 dark:bg-neutral-800">
                ctrl + d
              </code>
              &nbsp; Toggle Dark Mode
            </li>
            <li>
              <code className="px-2 rounded bg-neutral-200 dark:bg-neutral-800">
                ctrl + m
              </code>
              &nbsp; Toggle Menu
            </li>
            <li>
              <code className="px-2 rounded bg-neutral-200 dark:bg-neutral-800">
                ctrl + s
              </code>
              &nbsp; Toggle Search
            </li>
            <li>
              <code className="px-2 rounded bg-neutral-200 dark:bg-neutral-800">
                ctrl + h
              </code>
              &nbsp; Toggle Shortcuts
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
