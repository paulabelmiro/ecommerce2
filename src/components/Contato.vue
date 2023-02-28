<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Redes Sociais</h2>
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/paula-cristiane-belmiro-26386859/"
          target="_blank"
        >
          Linkedin
        </a>
      </li>
      <li>
        <a
          href="https://github.com/paulabelmiro"
          target="_blank"
        >
          Github
        </a>
      </li>
    </ul>

    <div class="form">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show" inline>
        <label class="mr-sm-2" for="input-group-2">Nome</label>
        <b-form-group id="input-group-2">
          <b-form-input
            id="input-group-2"
            v-model="form.name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Digite seu nome"
            required
          ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contato',
  data () {
    return {
      msg: 'Nossos Contatos',
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  padding: 20px;
  margin-top: 20px;
  background-color: lightgray;
}
h1, h2 {
  font-weight: normal;
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
