let link = "";
const form = document.querySelector(".form");
const copy = document.querySelector(".copy-default");
const shuffle = document.querySelector(".shuffle");

form.addEventListener("submit", (e) => {
  console.log("username:", document.querySelector("#username").value);
  document.querySelector(".links").innerHTML = "";
  e.preventDefault();
  link = document.querySelector("#link").value;
  console.log(link);
  copy.setAttribute("style", "color:black; background-color:#f3b200;");
  shuffle.setAttribute("style", "color:black; background-color:#f3b200;");
  copy.removeAttribute("disabled");
  shuffle.removeAttribute("disabled");
  executeFilter();
});

let extractedLinksCopy = [];
let copiedLinks = "";

const executeFilter = () => {
  // Xử lý phần chỉ nhìn thấy x.com ko có https
  link = link.replaceAll(" x.com", "https://x.com");
  console.log(link);

  // Regular expression to extract links
  let regex = /((http|https):\/\/[^\s]+)/g;

  // Using match() to extract links
  let extractedLinks = link.match(regex);
  console.log(extractedLinks);

  extractedLinks = extractedLinks.filter(
    (item) =>
      !item
        .toLowerCase()
        .includes(document.querySelector("#username").value.toLowerCase())
  );

  // Printing the extracted links
  console.log(extractedLinks);

  const filterArr = [];

  for (let i = 0; i < extractedLinks.length - 1; i++) {
    if (
      extractedLinks[i].slice(0, 30) === extractedLinks[i + 1].slice(0, 30) &&
      typeof (
        +extractedLinks[i].charAt(extractedLinks[i].length - 1) !== "number"
      ) &&
      extractedLinks[i].substring(extractedLinks[i] - 10) ===
        extractedLinks[i + 1].substring(extractedLinks[i + 1] - 10)
    ) {
      filterArr.push({ link: extractedLinks[i], index: i });
    }
  }

  console.log("FilterArr", filterArr);

  filterArr.reverse().forEach((item) => {
    extractedLinks.splice(item.index, 1);
  });

  extractedLinksCopy = extractedLinks.map((item) => {
    let li = document.createElement("li");
    // console.log(item, typeof item);

    let modifiedItem = item;

    if (item.includes(")")) {
      modifiedItem = item.substring(0, item.indexOf(")"));
    }
    li.innerText = `${modifiedItem}`;
    document.querySelector(".links").appendChild(li);
    // console.log(extractedLinks);
    return modifiedItem;
  });
};

copy.addEventListener("click", () => {
  copiedLinks = "";
  navigator.clipboard
    .writeText("")
    .then(() => {
      extractedLinksCopy.map((item) => {
        copiedLinks += item + "\n";
      });
    })
    .then(() => {
      navigator.clipboard.writeText(copiedLinks);
      copy.innerText = "Copied";
    });
});

document.querySelector("form").addEventListener("keyup", () => {
  copy.setAttribute("style", "color:#b3b2b0; background-color:#8b8b8b;");
  shuffle.setAttribute("style", "color:#b3b2b0; background-color:#8b8b8b;");
  copy.setAttribute("disabled", "");
  shuffle.setAttribute("disabled", "");
  console.log("disabled");
  copy.innerText = "Copy";
});

// RAMDOM

// Shuffle the array
shuffle.addEventListener("click", () => {
  for (let i = extractedLinksCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [extractedLinksCopy[i], extractedLinksCopy[j]] = [
      extractedLinksCopy[j],
      extractedLinksCopy[i],
    ];
  }
  console.log(extractedLinksCopy);
  document.querySelector(".links").innerHTML = "";
  extractedLinksCopy.forEach((item) => {
    let li = document.createElement("li");
    let modifiedItem = item;
    li.innerText = `${modifiedItem}`;
    document.querySelector(".links").appendChild(li);
  });
});
