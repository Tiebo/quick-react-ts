/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: true, // or 'media' or 'class'
  //这里可以对tailwind的类名进行扩展
  theme: {
    extend: {
      colors: {
        //将 colors 类名替换为你的颜色
        primary: "#ff0000",
      },
      zIndex: {
        //在zindex当中添加你的自定义类名z-1
        "-1": "-1",
      },
    },
  },
  variants: {},
  plugins: [],

}

