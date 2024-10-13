import {computed, defineComponent, ref} from 'vue'

// Значения взяты из https://jsonplaceholder.typicode.com/comments
export const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
]

export default defineComponent({
  name: 'MarkedEmailsApp',

  setup() {
    const searchText = ref()

    let emails2 = computed(() => {
      emails2 = []
      for(let i = 0; i < emails.length; i++) {
        if (emails[i].includes(searchText.value) && searchText.value !== '') {
          emails2.push({name: emails[i], flag: true})
        } else {
          emails2.push({name: emails[i], flag: false})
        }
      }
      return emails2
    })

    return {
      searchText,
      emails2,
    }
  },

  template: `
    <div>
      <div class="form-group">
        <input type="search" aria-label="Search" v-model="searchText"/>
      </div>
      <ul aria-label="Emails" v-for="email in emails2">
        <li :class="{'marked' : email.flag }">
          {{ email.name }}
        </li>
      </ul>
    </div>
  `,
})
