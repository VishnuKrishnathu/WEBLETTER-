export default function SearchBar() {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search" id="search-input" />
      <div id="search-icon">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.2708 32.4792C26.872 35.3097 22.5128 36.7209 18.1 36.4194C13.6872 36.1178 9.56052 34.1266 6.57837 30.86C3.59623 27.5934 1.98821 23.3029 2.0888 18.881C2.18939 14.459 3.99086 10.2461 7.11846 7.11846C10.2461 3.99086 14.459 2.18939 18.881 2.0888C23.3029 1.98821 27.5934 3.59623 30.86 6.57837C34.1266 9.56052 36.1178 13.6872 36.4194 18.1C36.7209 22.5128 35.3097 26.872 32.4792 30.2708L44.3333 42.125C44.4868 42.268 44.61 42.4405 44.6954 42.6322C44.7808 42.8239 44.8267 43.0308 44.8304 43.2406C44.8341 43.4504 44.7955 43.6588 44.7169 43.8533C44.6383 44.0479 44.5214 44.2246 44.373 44.373C44.2246 44.5214 44.0479 44.6383 43.8533 44.7169C43.6588 44.7955 43.4504 44.8341 43.2406 44.8304C43.0308 44.8267 42.8239 44.7808 42.6322 44.6954C42.4405 44.61 42.268 44.4868 42.125 44.3333L30.2708 32.4792V32.4792ZM5.20832 19.2708C5.2088 16.9861 5.76597 14.7358 6.83162 12.7148C7.89728 10.6938 9.43932 8.96281 11.3243 7.67173C13.2093 6.38064 15.3805 5.56829 17.6501 5.30497C19.9196 5.04164 22.2192 5.33527 24.3497 6.16045C26.4803 6.98564 28.3777 8.31751 29.8778 10.0408C31.3779 11.7642 32.4355 13.8271 32.9591 16.051C33.4827 18.275 33.4565 20.5931 32.8828 22.8046C32.3092 25.0162 31.2053 27.0547 29.6667 28.7437C29.4553 28.8212 29.2633 28.9437 29.104 29.1027C28.9446 29.2617 28.8217 29.4534 28.7437 29.6646C26.7291 31.5008 24.2242 32.712 21.5338 33.1506C18.8433 33.5893 16.0834 33.2366 13.5898 32.1353C11.0962 31.0341 8.97646 29.2319 7.48841 26.9479C6.00037 24.664 5.20821 21.9968 5.20832 19.2708V19.2708Z"
            fill="#9092BC"
          />
        </svg>
      </div>
    </div>
  );
}