import {computed, defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const a = ref()
    const b = ref()
    const operator = ref()

    const result = computed( () => {
      if (operator.value === 'sum') {
        return a.value + b.value
      }
      if (operator.value === 'subtract') {
        return a.value - b.value
      }
      if (operator.value === 'multiply') {
        return a.value * b.value
      }
      if (operator.value === 'divide') {
        return a.value / b.value
      }
      return ''
    })

    return {
      a,
      b,
      result,
      operator,
    }

  },

  template: `
    <div class="calculator">
      <input type="number" v-model="a" aria-label="First operand"/>

      <div class="calculator__operators">
        <label><input type="radio" name="operator" v-model="operator" value="sum"/>➕</label>
        <label><input type="radio" name="operator" v-model="operator" value="subtract"/>➖</label>
        <label><input type="radio" name="operator" v-model="operator" value="multiply"/>✖</label>
        <label><input type="radio" name="operator" v-model="operator" value="divide"/>➗</label>
      </div>

      <input type="number" v-model="b" aria-label="Second operand"/>

      <div>=</div>

      <output class="pin">{{ result }}</output>
    </div>
  `,
})
