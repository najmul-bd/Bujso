const cLanguageTopics = [
    {
        topic: "Hello World Program",
        description: "প্রথম প্রোগ্রাম যা কনসোলে 'Hello, World!' প্রিন্ট করে।",
        syntax: `
#include<stdio.h>
int main() {
    printf("Hello, World!");
    return 0;
}`,
        examples: [
            "কনসোলে 'Hello, World!' দেখা যাবে।",
            "এই প্রোগ্রামে `stdio.h` ব্যবহার করা হয়েছে।",
            "প্রত্যেক C প্রোগ্রামে `main()` ফাংশন থাকা আবশ্যক।"
        ]
    },
    {
        topic: "Variables and Data Types",
        description: "ভেরিয়েবল ঘোষণা এবং ডেটা টাইপস।",
        syntax: `
#include<stdio.h>
int main() {
    int age = 25;
    float pi = 3.14;
    char initial = 'N';
    printf("Age: %d, Pi: %.2f, Initial: %c", age, pi, initial);
    return 0;
}`,
        examples: [
            "ইন্টিজার, ফ্লোট, এবং ক্যারেক্টার ডেটা টাইপস।",
            "printf() ফাংশন ব্যবহার করে মান প্রিন্ট করা হয়েছে।",
            "মেমোরি অপ্টিমাইজেশনের জন্য সঠিক ডেটা টাইপ ব্যবহার করুন।"
        ]
    },
    {
        topic: "Control Structures (if-else)",
        description: "নিয়ন্ত্রণ কাঠামো প্রোগ্রামে শর্ত ব্যবহারের জন্য।",
        syntax: `
#include<stdio.h>
int main() {
    int num = 10;
    if (num > 0) {
        printf("Positive Number");
    } else {
        printf("Non-Positive Number");
    }
    return 0;
}`,
        examples: [
            "প্রোগ্রামে শর্ত নির্ধারণে ব্যবহার।",
            "if এবং else ব্লক ব্যবহার করা হয়েছে।",
            "চলকটি (num) পজিটিভ কিনা পরীক্ষা করা হয়েছে।"
        ]
    },
    {
        topic: "Loops (for Loop)",
        description: "লুপ ব্যবহার করে কোড পুনরাবৃত্তি।",
        syntax: `
#include<stdio.h>
int main() {
    for (int i = 1; i <= 5; i++) {
        printf("%d\\n", i);
    }
    return 0;
}`,
        examples: [
            "for লুপ ব্যবহার করা হয়েছে।",
            "1 থেকে 5 পর্যন্ত সংখ্যা প্রিন্ট করা হয়েছে।",
            "ইন্টারভাল 1 করে ইনক্রিমেন্ট করা হয়েছে।"
        ]
    }
];

// Display the topics dynamically
const displayCTopics = () => {
    const container = document.getElementById("syntax-container");
    container.innerHTML = "";

    cLanguageTopics.forEach(topic => {
        const card = document.createElement("div");
        card.classList.add("card");

        const heading = document.createElement("h3");
        heading.textContent = topic.topic;

        const description = document.createElement("p");
        description.textContent = topic.description;

        const syntaxBlock = document.createElement("pre");
        syntaxBlock.textContent = topic.syntax;

        const examplesList = document.createElement("ul");
        topic.examples.forEach(example => {
            const exampleItem = document.createElement("li");
            exampleItem.textContent = example;
            examplesList.appendChild(exampleItem);
        });

        card.appendChild(heading);
        card.appendChild(description);
        card.appendChild(syntaxBlock);
        card.appendChild(examplesList);

        container.appendChild(card);
    });
};

// Load the content
window.onload = displayCTopics;