export default {
  data: {
    show:true,
    display:false,
    card_name: "天气",
    temperature: "35°",
    city: "上海",
    date: "9月4号 星期五",
    weather_info: "多云",
    image_src:"../../common/clouds.png"
  },
  actions: {
    router: {
      action: "router",
      bundleName: "com.example.helloworld",
      bundleAbility: "com.example.helloworld.MainAbility"
    }
  }
}
