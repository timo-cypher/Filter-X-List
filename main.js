let link = "";
const form = document.querySelector(".form");
const copy = document.querySelector(".copy-default");

form.addEventListener("submit", (e) => {
  document.querySelector(".links").innerHTML = "";
  e.preventDefault();
  link = document.querySelector("#link").value;
  console.log(link);
  copy.setAttribute("style", "color:black; background-color:#f3b200;");
  copy.removeAttribute("disabled");
  executeFilter();
});

// Regular expression to extract links
let regex = /((http|https):\/\/[^\s]+)/g;

let extractedLinksCopy = [];
let copiedLinks = "";

const executeFilter = () => {
  // Using match() to extract links
  let extractedLinks = link.match(regex);

  const index = extractedLinks.findIndex((item) => {
    return item.includes(document.querySelector("#username").value);
  });

  console.log(index);
  extractedLinks.splice(index, 1);

  // Printing the extracted links
  console.log(extractedLinks);

  const filterArr = [];

  for (let i = 0; i < extractedLinks.length - 1; i++) {
    if (extractedLinks[i].slice(0, 30) === extractedLinks[i + 1].slice(0, 30)) {
      filterArr.push({ link: extractedLinks[i], index: i });
    }
  }

  console.log("FilterArr", filterArr);

  filterArr.reverse().forEach((item) => {
    extractedLinks.splice(item.index, 1);
  });

  extractedLinksCopy = extractedLinks.map((item) => {
    let li = document.createElement("li");
    console.log(item, typeof item);

    const modifiedItem = item;

    if (item.includes(")")) {
      modifiedItem = item.substring(0, item.indexOf(")"));
    }
    li.innerText = `${modifiedItem}`;
    document.querySelector(".links").appendChild(li);
    console.log(extractedLinks);
    return modifiedItem;
  });
};

copy.addEventListener("click", () => {
  console.log("hello");

  console.log(extractedLinksCopy);
  extractedLinksCopy.map((item) => {
    copiedLinks += item + "\n";
  });

  navigator.clipboard.writeText(copiedLinks);
  copy.innerText = "Copied";
});

document.querySelector("form").addEventListener("keyup", () => {
  copy.setAttribute("style", "color:#b3b2b0; background-color:#8b8b8b;");
  copy.setAttribute("disabled", "");
  console.log("disabled");
  copy.innerText = "Copy";
});
