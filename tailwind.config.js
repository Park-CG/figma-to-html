/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          "wwwtoatcokralizarin-crimson": "var(--wwwtoatcokralizarin-crimson)",
        },
        fontFamily: {
          "m3-title-large-emphasized":
            "var(--m3-title-large-emphasized-font-family)",
          "www-toat-co-kr-noto-sans-KR-bold":
            "var(--www-toat-co-kr-noto-sans-KR-bold-font-family)",
          "www-toat-co-kr-noto-sans-KR-regular":
            "var(--www-toat-co-kr-noto-sans-KR-regular-font-family)",
          "www-toat-co-kr-roboto-mono-regular":
            "var(--www-toat-co-kr-roboto-mono-regular-font-family)",
          "www-toat-co-kr-semantic-heading-2":
            "var(--www-toat-co-kr-semantic-heading-2-font-family)",
          "www-toat-co-kr-semantic-heading-3":
            "var(--www-toat-co-kr-semantic-heading-3-font-family)",
          "www-toat-co-kr-semantic-heading-4":
            "var(--www-toat-co-kr-semantic-heading-4-font-family)",
          "www-toat-co-kr-semantic-heading-5":
            "var(--www-toat-co-kr-semantic-heading-5-font-family)",
          "www-toat-co-kr-semantic-link":
            "var(--www-toat-co-kr-semantic-link-font-family)",
          "www-toat-co-kr-semantic-strong":
            "var(--www-toat-co-kr-semantic-strong-font-family)",
        },
      },
    },
    plugins: [],
  };
  