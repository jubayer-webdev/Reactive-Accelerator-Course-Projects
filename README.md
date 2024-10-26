## ![rocketIcon][rocketicon-shield] How to run

Please follow the below instructions to run this branch in your machine:

1. Login to the GitHub account.

2. Clone this repository -
    ```sh
    https://github.com/jubayer-webdev/Reactive-Accelerator-Course.git
    ```
3. Go to the cloned project directory
    ```sh
    cd Reactive-Accelerator-Course
    ```
4. Checkout/switch to branch Assignment-3-Batch-2\_\_\_Project-Manager
    ```sh
    git checkout Assignment-3-Batch-2___Project-Manager
    ```
5. Just run this command to install node dependencies
    ```sh
    npm i
    ```
6. Just run this command
    ```sh
    npm run dev
    ```

## এসাইনমেন্টে আপনাকে যা যা করতে হবেঃ

✓ আমাদের দেয়া, HTML টেমপ্লেট এর কোড গুলো নিয়ে, নতুন একটি Vite প্রোজেক্ট initate করে সম্পুর্ন scratch থেকে এই এসাইনমেন্টটি করতে হবে ।

✓ আপনার প্রজেক্টের "Add" বাটনে ক্লিক করলে আপনাকে একটি popup দেখাতে হবে এবং সেই popup-এ প্রয়োজনীয় তথ্য প্রদান করে "Create Task" বাটনে ক্লিক করলে Task List এ নতুন Task হিসেবে যুক্ত হবে । Popup তৈরির জন্যে আলাদা কোন প্যাকেজ ব্যবহার করতে পারবেন না । Task তৈরির সময় যেই Category Select করে দেয়া হবে, সেই Category এর কলামেই কার্ড টি দেখাতে হবে ।

✓ নতুন Task তৈরি করার ক্ষেত্রে বেসিক কিছু ভ্যালিডেশন থাকতে হবে । অর্থাৎ কেউ যদি Title, Description, Date বা Category সেট না করেই "Create Task" বাটনে ক্লিক করে, তাহলে সাবমিট না হয়ে একটি warrning দেখাবে । Warrning টি আপনি চাইলে Alert এর মাধ্যমেও দেখাতে পারেন অথবা Text আকারে popup এর মধ্যেও দেখাতে পারেন । তবে warning এর জন্যে আপনি চাইলে React Toastify প্যাকেজ ব্যবহার করতে পারেন, এটি সম্পুর্ন ঐচ্ছিক । তবে React Toastify ব্যাতিত অন্য কিছু আপনি ব্যবহার করতে পারবেন না ।

✓ প্রতিটি কার্ডের সাথে Pencil এর আইকন আছে, যেটিতে ক্লিক করলে, সেই কার্ড এর ডেটা এডিট করতে হবে। এডিট করার জন্যে "Create Task" এর popup এই ডেটা গুলো নিয়ে এডিট করতে পারেন ।

✓ Task ডিলিট বাটনে ক্লিক করলে, Task টি Task List থেকে রিমুভ হয়ে যাবে ।

✓ বেসিক সার্চ ফিচার থাকবে। সার্চবার-এ কোন কিছু লিখলে সেটি Task List এ ফিল্টার করে দেখাবে এবং সার্চ বার ফাকা থাকলে, সব গুলো Task-ই Task List-এ দেখাবে । এক্ষেত্রে, সার্চ শুধু Task Title দিয়েই হবে । এবং সার্চ এর ক্ষেত্রে সব গুলো কলামেই সার্চ হয়ে শুধু মাত্র Matched টাইটেলের কার্ড গুলো থাকবে ।

✓ Task লিস্টে যখন কোন Task থাকবে না, তখন সেখানে সুন্দর করে দেখাতে হবে - "Task List is empty!" ।

✓ প্রত্যেকটি কলাম আলাদা আলাদা ভাবে Sorting করা যাবে। প্রতিটি কলামের নাম বরাবর Sorting Icon আছে, সেটিতে ক্লিক করলে, সেই কলামের কার্ড গুলো Date এর ভিত্তিতে Sort হবে ।

✓ প্রত্যেকটি কলাম এর টাইটেলের পাশে ব্রাকেটে একটি সংখ্যা দেখতে পারছেন। সেই কলামে কত গুলো কার্ড বা Task রয়েছে সেটির সংখ্যা সেই ব্রাকেটে দেখাতে হবে ।

✓ সব শেষে এটি খেয়াল রাখতে হবে, পুরো এসাইনমেন্টে আপনি যথাযত জায়গায় Context API এবং useReducer ব্যবহার করেছেন ।

✓ পুরো প্রজেক্টটি জাভাস্ক্রিপ্টে করতে হবে । টাইপস্ক্রিপ্ট ব্যবহার করা যাবেনা।

✓ কোন ধরণের একশনে পেইজ রিলোড গ্রহণযোগ্য নয়।

## Assignment এর জন্য প্রয়োজনীয় template HTML:

assignment এর সাথে প্রয়োজনীয় HTML template এর জন্য [Github Link](https://github.com/Learn-with-Sumit/rnext/tree/assignment-3-batch-2)। এখানে 'dist' folder এর ভিতর HTML template পাবেন। না বুঝলে [এইখানে ক্লিক](https://learnwithsumit.com/rnext/courses/rnext/how-to-submit-assignments-in-reactive-accelerator-course) করে টিউটোরিয়াল দেখে নিতে পারেন।

-   [Assignment 3 Requirements - Batch 2 - Project Manager](https://learnwithsumit.com/rnext/courses/rnext/assignment-3-requirements-batch-2-project-manager)
