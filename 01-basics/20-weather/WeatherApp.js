import {defineComponent} from 'vue'
import {getWeatherData, WeatherConditionIcons} from './weather.service.ts'

export default defineComponent({
  name: 'WeatherApp',

  setup() {

    function formatTemperatureToCelcius(temp) {
      return (temp - 273.15).toFixed(1)
    }

    function formatPressureToMMHg(press) {
      return (press * 0.75).toFixed(0)
    }

    function isNight(date, sunrise, sunset) {
      return date < sunrise || date > sunset
    }

    return {
      weatherData: getWeatherData(),
      weatherConditionIcons: WeatherConditionIcons,
      formatTemperatureToCelcius,
      formatPressureToMMHg,
      isNight,
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list">
        <li v-for="weather in weatherData"
        :class="{'weather-card--night' : isNight(weather.current.dt,weather.current.sunrise,weather.current.sunset)}"
        class="weather-card
        ">
          <div v-if="weather.alert" class="weather-alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">Королевская метеослужба короля Арагорна II: Предвещается наступление сильного шторма.</span>
          </div>
          <div>
            <h2 class="weather-card__name">
              {{ weather.geographic_name }}
            </h2>
            <div class="weather-card__time">
              {{ weather.current.dt }}
            </div>
          </div>
          <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="weather.current.weather.description">
              {{ weatherConditionIcons[weather.current.weather.id] }}
            </div>
            <div class="weather-conditions__temp">{{ formatTemperatureToCelcius(weather.current.temp) }} °C</div>
          </div>
          <div class="weather-details">
            <div class="weather-details__item">
              <div class="weather-details__item-label">Давление, мм рт. ст.</div>
              <div class="weather-details__item-value">{{ formatPressureToMMHg(weather.current.pressure) }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Влажность, %</div>
              <div class="weather-details__item-value">{{ weather.current.humidity }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Облачность, %</div>
              <div class="weather-details__item-value">{{ weather.current.clouds }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Ветер, м/с</div>
              <div class="weather-details__item-value">{{ weather.current.wind_speed }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
})
