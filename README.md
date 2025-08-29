# Answer the questions

## 1.getElementById, getElementsByClassName, and querySelector , querySelectorAll are DOM selection methods. But they work different.
-	**getElementById** : It is select a single element . That is id.
Ex...  const element=document.getElementById(‘card’)
-	**getElementsByClassName**:  It is select all element with class name. To access, run a loop.
Ex...  const element=document.getElementById(‘card’)
Ex... const elements=document.getElementByClassName(‘card’)
for(const element of elements){}
-	**querySelector**: It is select first element that match CSS selector.
Ex...  const elements=document. querySelector (‘.card’)
Ex...  const elements=document. querySelector (‘#card’)

-	**querySelectorAll**: It is select all element that match CSS selector. To access, run a loop “forEach”. 
Ex...  const elements=document. querySelectorAll (‘.card’)
elements.forEach((button){})

## 2.create and insert a new element into the DOM
**Create element**
const div=document.createElement(“div”)

**insert element**:
appendChild, prepend,before , after  uses.
- ex:  document.body.appendChild(“div”)
- ex:  document.body.prepend(“div”)




## 3.**Event Bubbling as a tree.**
When an event (like click) occurs in a web browser the event first triggers that element. Then step by step its parent element and its parent element continues up the document. This is event bubbling.

 ```html
<div id=”main-parent”>
<div id=”parent”>
<div id=”child”>click</div>
</div>
</div>;
```
**How event bubbling works**
The element that is the event(like #child) occurred is the target phase.
step by step ups to its parent element and its parent element and body elements and document element. Its called bubbling.

## 4. Event delegation :
Event delegation is technique in Javascript where instead of assigning event listeners to individual child element they assign event listeners to their parent elements.



```html
 <ul id="menu">
<li>item-1</li>
<li> item-2</li>
<li> item-3</li>
</ul>
```` 
```js
<script>
document.getElementById("menu").addEventListener("click", function(event) {
if (event.target.tagName === "LI") {
console.log("clicked", event.target.innerText);
}
});
</script>;
```

There are a few reasons why event listeners are useful.
Performance is good. Works with just one listener.
Works for dynamic elements. No need to set up separate listeners.
The code is small and maintainable. There is no hassle of managing multiple listeners.

## 5. Different between preventDefault() and stopPropagation()
- **preventDefault()**
Disables the browsers default action. Does not disable bubbling.
- **stopPropagation()**
Does not allow the event to go up or down. however it does not stop the default action in the browser.
