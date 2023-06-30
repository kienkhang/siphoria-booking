<template lang="pug">
.flex.gap-16
  //- Hotel name and overviews
  .flex.flex-col.gap-6.flex-1
    span.text-4xl.line-clamp-2.font-semibold Cam Ranh Riviera Beach Resort & Spa - All Exclusive
    NRate( size='large', readonly, :value='5' class='mt-2' color='#F4803F')
    .overview  
      span.text-2xl.font-semibold Overview
      div(v-html='overview')

  //- Address and Reviews
  .flex.flex-col.gap-3.max-w-375px.w-full
    //- Google map
    div(class='w-full overflow-hidden border border-metal h-180px rounded-xl')
      iframe(class="w-full h-full border-0" frameborder="0" :src='embedUrl')
    .address
      span.text-xs.font-medium {{ address }}
    .h-1px.w-full.bg-platinum
    .flex.items-center.gap-4
      n-progress(type="circle" :percentage="92" :offset-degree="180" color='#FF9900')
        span.text-3xl.font-medium 4.5
      .flex.flex-col.gap-3.w-full
        //- Stars
        .flex.items-center.justify-between.gap-3.gap-3
          .flex.gap-1.items-center
            span 5 
            NRate( size='small', readonly, :value='1' :count='1' color='#F4803F')
          n-progress(type="line" :percentage="90" :show-indicator="false" color='#1BBA85')
        //- Stars
        .flex.items-center.justify-between.gap-3
          .flex.gap-1.items-center
            span 4
            NRate( size='small', readonly, :value='1' :count='1' color='#F4803F')
          n-progress(type="line" :percentage="80" :show-indicator="false" color='#1BBA85')
        //- Stars
        .flex.items-center.justify-between.gap-3
          .flex.gap-1.items-center
            span 3
            NRate( size='small', readonly, :value='1' :count='1' color='#F4803F')
          n-progress(type="line" :percentage="70" :show-indicator="false" color='#1BBA85')
        //- Stars
        .flex.items-center.justify-between.gap-3
          .flex.gap-1.items-center
            span 2
            NRate( size='small', readonly, :value='1' :count='1' color='#F4803F')
          n-progress(type="line" :percentage="60" :show-indicator="false" color='#1BBA85')
        //- Stars
        .flex.items-center.justify-between.gap-3
          .flex.gap-1.items-center
            span 1
            NRate( size='small', readonly, :value='1' :count='1' color='#F4803F')
          n-progress(type="line" :percentage="50" :show-indicator="false" color='#1BBA85')
    BaseButton(class='justify-center w-full p-2 font-medium border rounded-lg text-crayola border-crayola') Xem bình luận


</template>

<script setup lang="ts">
const address = ref('Cam Ranh Riviera Beach Resort & Spa - All Exclusive')
const embedUrl = computed(
  () =>
    `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(
      address.value
    )}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`
)
const overview =
  '<p><span style="color: rgb(26, 26, 26);">Tọa lạc tại Thành phố Hồ Chí Minh, cách Bảo tàng Lịch sử Việt Nam 3,5 km, Oakwood Hotel &amp; Apartments Saigon cung cấp chỗ nghỉ 4 sao và có trung tâm thể dục, nhà hàng cũng như quầy bar. Khách sạn 4 sao này có phòng giữ hành lý. </span></p><p><br></p><p><span style="color: rgb(26, 26, 26);">Chỗ nghỉ cung cấp dịch vụ lễ tân 24 giờ, dịch vụ đưa đón sân bay, dịch vụ phòng và Wi-Fi miễn phí trong toàn bộ khuôn viên.</span>Phòng nghỉ gắn máy điều hòa tại khách sạn có bàn làm việc, ấm đun nước, tủ lạnh, lò vi sóng, két an toàn, TV màn hình phẳng và phòng tắm riêng với vòi xịt/chậu rửa vệ sinh. Tại Oakwood Hotel &amp; Apartments Saigon, mỗi phòng đều được trang bị ga trải giường và khăn tắm.</p><p><br></p><p>Chỗ nghỉ phục vụ bữa sáng à la carte và bữa sáng kiểu lục địa hằng ngày.</p><p>Oakwood Hotel &amp; Apartments Saigon nằm cách trung tâm thương mại Diamond Plaza 4,6 km và Bưu điện Trung tâm Sài Gòn 4,7 km. Sân bay gần nhất là sân bay quốc tế Tân Sơn Nhất, nằm trong bán kính 7 km từ khách sạn.</p>'
</script>

<style scoped></style>
