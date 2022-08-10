<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
          >Forum</a
        >
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
          >Community Chat</a
        >
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
          >Twitter</a
        >
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>
  </div>
<!-- 
  <div id="inline-event-counter-example">
    <h1>The current count is: {{ count }}</h1>
    <button v-on:click="count -= 1">Resta 1</button>
    <button v-on:click="count++">Suma 1</button>
  </div>

  <div id="evente-function-to-change-name">
    <h1>{{ nameEvent2 }}</h1>
    <button @click="changeName">Click me to Change</button>
  </div> -->

<div id="changing-names">
  <h1> {{bandArray.name}} is training in Murcia</h1>
  <button @click="changeName">Click me to change User</button>
</div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  data(){
    return {
      bandArray: {
        name: 'Madu',

        
      }}
  
      
  },


  methods: {
    changeName(event) {
      this.bandArray.name = "Marcos" ;
      console.log(event);
    },
  },
};
// export default {
//   name: "HelloWorld",
//   data() {
//     return {
//       // Usamos la regla, de el syntax de bigotes para poder acceder a nuestra data dentro del templateTag que es nuestro HTML.
//       // Este principio se llama text interpolation / interpolacion de texto ?
//       // binding text
//       name: "Diego",
//       greet: "Hello",
//       // binding text using the v-text directive
//       band: "Fleetwod Mac",
//       // binding html using the v-html directive, please always use templateLiterals for inyecting html into the template templateLiterals = ``
//       balma: `<b>Wu Tang Clan</b>`,
//       // Usando API's externas siempre tener cuidado que la data que componga esta API sea correcta, porque si usamos un API externo y usamos esta directirz abrimos las posibilades que nos ataquen mediante un approach de hackeo que se llama crossSideScripting!
//       bindingHtmlCrossSide: `<a href="#" onClick="alert('Yo yo yo you have been hacked by the wu tang clan')">Win a prize by clicking here!</a>`,
//       // Bind Attributes - ID Attribute
//       headingIdExample: "balmas-heading",
//       //Binding with a Boolean Value
//       isDisabled: true,
//       // Bind Attributes - Class Attribute
//       status: "danger",
//       // Conditionally render attributes/properties with classes
//       isPromoted: false,
//       // Conditionally Render attributes with more than 1 condition
//       isSoldOut: true,
//       // Dynamically inyect style properties within an object
//       textColor: "#3590F3",
//       textSize: 40,
//       // Dynamically inyect style properties within a single Object
//       styleObject: {
//         color: "blue",
//         fontSize: "50px",
//         padding: "20px",
//       },
//       //Dinamically inject arrays within a style attribute
//       baseStyleOject: {
//         fontSize: "50px",
//         padding: "10px",
//       },
//       successStyleObject: {
//         color: "green",
//         backgroundColor: "lightgreen",
//         border: "1px solid darkgreen",
//         padding: "20px",
//       },
//       dangerStyleObject: {
//         color: "darkred",
//         backgroundColor: "red",
//         border: "1px solid darkred",
//         padding: "30px",
//       },
//       // Conditional Rendering using v-if, v-else, v-else-if directives inside Vue. For this specific example we are going to use a number property.
//       // num: "Wu Tang Clan", // Example using a string to showcase that this is not a number
//       num: 2,
//       // Conditionally render multiple elements inside the same condition
//       display: true,
//       //Conditionally rendering elements using v-show directive
//       showElement: true,
//       //Iterating through data with the v-for directive
//       // array of strings
//       names: ["Diego", "Jarko", "Aleix", "Diego", "Jarko", "Aleix"],
//       // Iterating an array of objects
//       teachersFullNames: [
//         { first: "Diego", last: "Zito" },
//         { first: "Aleix", last: "Abuli" },
//         { first: "Carlos aka Jarko", last: "Garrido" },
//       ],
//       //Iterating an array of arrays (nestedArrays o en castellano arrays anidados)
//       actors: [
//         {
//           name: "Robert De Niro",
//           movies: ["The Godfather II", "Casino", "Goodfellas"],
//         },
//         {
//           name: "Daniel Day Lewis",
//           movies: [
//             "There will Be Blood",
//             "Gangs of New York",
//             "Phantom Thread",
//           ],
//         },
//         {
//           name: "Merryl Streep",
//           movies: [
//             "The Devil Wears Prada",
//             "Kramer vs Kramer",
//             "Sophies Choice",
//           ],
//         },
//       ],
//       //Iterating through the properties of an object
//       myInfo: {
//         name: "Diego",
//         school: "Ironhack",
//         course: "FE Vue",
//       },
//       //Conditionally render a list that is iterated using the v-for directive
//       hipHopArtists: [
//         "Wu Tang Clan",
//         "Ms. Lauryn Hill",
//         "A tribe Called Quest",
//       ],
//       // Using methods
//       //Data property that we are going to sue as a base multiplier
//       baseMultiplier: 5,
//       //Name property to pass along to inlineMethod to change name
//       nameEvent: "Michael Jordan",
//       // Count property to pass along to inlineMethod to create a counter
//       count: 0,
//       // Count property to pass along to  separated Method inside the methods object to create a counter
//       countInsideMethod: 0,
//       //count property to use inisde a function with params
//       countWithParams: 0,
//       //Fucntion to change name extracting the logic to be used inside the function.
//       nameEvent2: "Stephan Curry",
//     };
//   },
//   methods: {
//     // Es aca done podemos definir nuestras funciones, podemos pasar la # de funciones que queramos.
//     //static function without arguments/params
//     addStatic() {
//       return 100 + 200 - 40;
//     },
//     // dynamic function using arguments/params
//     addDynamic(a, b, c) {
//       return a + b - c;
//     },
//     //dinmayc function using arguments/params, except we are goin gto multiply.
//     multiply(num) {
//       return num * this.baseMultiplier;
//     },
//     //function to pass aling the button to manage the math of the count - INCREMENT FUNCTION
//     increment() {
//       this.countInsideMethod += 1;
//     },
//     //function to pass along the button to manage the math of the count - DECREMENT FUNCTION
//     decrement() {
//       this.countInsideMethod--;
//     },
//     // Function with arguments/params to increase the counter with any given number that we are going to pass
//     incrementWithParams(num) {
//       this.countWithParams += num;
//     },
//     // Function with arguments/params to decrease the counter with any given number that we are going to pass
//     decrementWithParams(num) {
//       this.countWithParams -= num;
//     },
//     changeName(event) {
//       this.nameEvent2 = "Dwayne Wade";
//       console.log(event);
//     },
//   },
// };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
