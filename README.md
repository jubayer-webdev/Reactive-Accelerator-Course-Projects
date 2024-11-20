## Table of Contents

-   [Resources](#resources)
-   [Project's Live Link](#projects-live-link)
-   [🚀 How to run](#-how-to-run)
-   [Assignment এর জন্য প্রয়োজনীয় template HTML:](#assignment-এর-জন্য-প্রয়োজনীয়-template-html)
-   [এসাইনমেন্ট এ আপনাকে যা যা করতে হবেঃ](#এসাইনমেন্ট-এ-আপনাকে-যা-যা-করতে-হবেঃ)

## Resources

> [!NOTE]
>
> -   [transform html to jsx](https://transform.tools/html-to-jsx)

## Project's Live Link

-   [https://reactive-accelerato-git-380058-md-jubayer-hossen-james-projects.vercel.app/](https://reactive-accelerato-git-380058-md-jubayer-hossen-james-projects.vercel.app/)

## 🚀 How to run

Please follow the below instructions to run this branch in your machine:

1. Login to the GitHub account.

2. Clone this repository -
    ```sh
    git clone https://github.com/jubayer-webdev/Reactive-Accelerator-Course.git
    ```
3. Go to the cloned project directory
    ```sh
    cd Reactive-Accelerator-Course-Projects
    ```
4. Checkout/switch to branch Assignmen-1-small-real-estate-website
    ```sh
    git checkout Assignmen-1-small-real-estate-website
    ```
5. Just run this command to install node dependencies
    ```sh
    npm i
    ```
6. Just run this command
    ```sh
    npm run dev
    ```

## Assignment এর জন্য প্রয়োজনীয় template HTML:

assignment এর সাথে প্রয়োজনীয় HTML template এর জন্য [Github Link](https://github.com/Learn-with-Sumit/rnext/tree/assignment-1-batch-2)। এখানে 'dist' folder এর ভিতর HTML template পাবেন। না বুঝলে [এইখানে ক্লিক](https://learnwithsumit.com/rnext/courses/rnext/how-to-submit-assignments-in-reactive-accelerator-course) করে টিউটোরিয়াল দেখে নিতে পারেন।

-   [Assignment 1 Requirements - Batch 2 - Small Real Estate Website Video Link](https://learnwithsumit.com/rnext/courses/rnext/assignment-1-requirements-batch-2-small-real-estate-website)

## এসাইনমেন্ট এ আপনাকে যা যা করতে হবেঃ

✓ পুরো এসাইনমেন্ট টেমপ্লেটটিকে রিয়্যাক্ট এ কনভার্ট করতে হবে । কনভার্ট করার সময় আপনার লজিকাল সেন্স এপ্লাই করতে হবে। কোন সেকশনকে কতটুকু কম্পোনেন্টে ভাঙবেন, সেটা আপনার কমন সেন্স থেকে আপনাকে সিদ্ধান্ত নিতে হবে। পুরো টেম্পলেটটিকে একটি রিয়্যাক্ট কম্পোনেন্টে রেখে দেয়ার মতো অযৌক্তিক কাজ করলে মার্ক স্বাভাবিকভাবেই পাবেন না। তাই যতটা সুন্দর করে কম্পোনেন্ট কম্পোজ করতে পারবেন ততোই ভাল মার্ক পাবেন।

✓ পুরো কোডে বিভিন্ন SVG রয়েছে, সেগুলোকে আলাদা ভাবে কম্পোনেন্ট এ রূপান্তর করে ব্যবহার করতে হবে। অর্থাৎ সারাসরি SVG ব্যবহার করতে পারবেন না। আপনাকে প্রথমে সেই SVG এর একটি কম্পোনেন্ট বানিয়ে নিতে হবে, এর পরে সেটি ব্যবহার করতে হবে ।

✓ আমাদের দেয়া টেমপ্লেটে "Grab your Dream Property" নামক একটি সেকশন রয়েছে। আপনাকে সেই সেকশন এর গ্রিড ভিউ তে বিভিন্ন Property এর তথ্য কার্ড আকারে রেন্ডার করতে হবে । বর্তমানে সেখানে ৫টি কার্ড আছে, প্রত্যেকটিতে একই ছবি এবং ডেটা দেয়া আছে। আপনাকে প্রত্যকটিতে আলাদা আলাদা ডেটা দিয়ে কার্ড গুলো রেন্ডার করতে হবে। আপনি চাইলে ৫ টির বেশি কার্ড ও রেন্ডার করতে পারেন। তবে প্রত্যেকটিতে অবশ্যই আলাদা আলাদা ডেটা এবং ছবি ব্যবহার করতে হবে ।

✓ কার্ড রেন্ডার করার জন্যে আপনাকে নিজেকে একটি Array of Object বানিয়ে নিতে হবে। আপনাকে সেই Array কে Map করে কার্ড গুলো রেন্ডার করতে হবে । কার্ডের তথ্য গুলো সঠিক হতে হবে এমন কোনো কথা নেই, তবে সেগুলো একেবারেই যেন অপ্রাসঙ্গিক না হয়।

✓ মোবাইল ভিউ তে যেন পুরো ওয়েবসাইট রেস্পন্সিভ হয়।
