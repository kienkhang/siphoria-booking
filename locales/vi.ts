export default {
  toast: {
    notification: 'Thông báo',
    an_error_occurred: 'Có lỗi xảy ra',
    login_form: {
      success: 'Đăng nhập thành công',
      error: 'Đăng nhập thất bại. Vui lòng thử lại'
    },
    signup_form: {
      success: 'Đăng ký tài khoản thành công. Vui lòng kiểm tra email để xác nhận',
      error: 'Đăng ký tài khoản thất bại'
    },
    change_password_form: {
      success: 'Thay đổi mật khẩu thành công',
      error: 'Thay đổi mật khẩu thất bại'
    },
    update_profile_form: {
      success: 'Thay đổi thông tin thành công',
      error: 'Thay đổi thông tin thất bại'
    },
    change_avatar: {
      file_large: 'File không được lớn hơn 2MB',
      be_image: 'File phải là hình ảnh',
      success: 'Thay đổi ảnh đại diện thành công',
      error: 'Thay đổi ảnh đại diện thất bại'
    },
    add_to_cart: {
      success: 'Thêm giỏ hàng thành công',
      error: 'Thêm giỏ hàng thất bại'
    },
    get_cart: {
      error: 'Không thể lấy dữ liệu giỏ hàng'
    },
    delete_cart: {
      success: 'Xoá đơn hàng thành công',
      error: 'Xoá đơn hàng thất bại'
    },
    checkout_cart: {
      error: 'Bạn chưa có đơn hàng nào'
    },
    pay: {
      error: 'Không thể tiến hành thanh toán'
    },
    get_payment: {
      error: 'Không thể lấy dữ liệu thanh toán'
    }
  },
  form: {
    login_form: {
      login: 'Đăng nhập',
      email_placeholder: 'Nhập email của bạn',
      password: 'Mật khẩu',
      password_placeholder: 'Nhập mật khẩu của bạn',
      forgot: 'Quên mật khẩu ?'
    },
    signup_form: {
      signup: 'Đăng ký',
      email_placeholder: 'Nhập email của bạn',
      password: 'Mật khẩu',
      password_placeholder: 'Nhập mật khẩu của bạn',
      first_name: 'Họ',
      first_name_placeholder: 'Nhập họ của bạn',
      last_name: 'Tên',
      last_name_placeholder: 'Nhập tên của bạn',
      confirm_password: 'Xác nhận mật khẩu',
      confirm_password_placeholder: 'Xác nhận lại mật khẩu của bạn'
    },
    change_password: {
      current: 'Mật khẩu hiện tại',
      current_placeholder: 'Nhập mật khẩu hiện tại',
      new: 'Mật khẩu mới',
      new_placeholder: 'Nhập mật khẩu mới',
      confirm: 'Xác nhận mật khẩu',
      confirm_placeholder: 'Nhập lại mật khẩu mới',
      change: 'Đổi'
    },
    update_profile: {
      first_name: 'Họ',
      first_name_placeholder: 'Nhập họ của bạn',
      last_name: 'Tên',
      last_name_placeholder: 'Nhập tên của bạn',
      phone: 'Số điện thoại',
      phone_placeholder: 'Nhập số điện thoại của bạn',
      change: 'Đổi'
    }
  },
  home_page: {
    slogan: 'Nền tảng Giao dịch Dịch vụ Du lịch thế hệ mới', // The next-generation Travel Service Transaction Platform,
    popular_location: 'Điểm đến hấp dẫn hàng đầu Việt Nam',
    type_of_hotel: 'Loại khách sạn',
    hotel: 'Khách sạn',
    resort: 'Khu nghỉ dưỡng',
    homestay: 'Homestay'
  },
  hotel_detail_page: {
    // Hotel
    show_all_photos: 'Hiển thị tất cả',
    overview: 'Tổng quan',
    see_comments: 'Xem bình luận',
    what_you_have_in_property: 'Những gì bạn có khi ở khách sạn',
    hotel_facilities: {
      bar: 'Quầy bar',
      bath: '@:hotel_detail_page.bath',
      beach: 'Gần biển',
      breakfast: 'Bữa sáng',
      casino: 'Casino',
      fitness: 'Phòng tập thể dục',
      no_smoking_room: 'Phòng không hút thuốc',
      parking: 'Bãi giữ xe',
      pool: 'Hồ bơi',
      spa: 'Spa',
      wifi: 'Wifi'
    },
    hotel_types: {
      apartment: 'Căn hộ',
      camping: 'Cắm trại',
      homestay: 'Homestay',
      hotel: 'Khách sạn',
      motel: 'Nhà nghỉ',
      resort: 'Khu nghỉ dưỡng',
      villa: 'Biệt thự'
    },
    // Room
    average_price_per_night: 'Giá trung bình mỗi đêm',
    room_quantity: '{count} phòng',
    night: 'Đêm',
    total: 'Tổng cộng',
    bed: 'Giường',
    bath: 'Bồn tắm',
    adult: 'Người lớn',
    children: 'Trẻ em',
    adults: '@:hotel_detail_page.adult',
    childrens: '@:hotel_detail_page.children',
    where_you_will_stay: 'Nơi bạn sẽ ở',
    facilities: 'Tiện ích',
    views: 'Phong cảnh',
    room_information: 'Thông tin phòng',
    room_facilities: {
      air_conditional: 'Máy lạnh',
      bbq: 'BBQ',
      desk: 'Bàn làm việc',
      fruit: 'Trái cây',
      fryer: 'Nồi chiên',
      hairdry: 'Máy sấy tóc',
      iron: 'Bàn ủi',
      kitchen: 'Bếp',
      kitchen_tool: 'Dụng cụ bếp',
      private_pool: 'Hồ bơi riêng',
      shower: 'Vòi sen',
      slippers: 'Dép',
      sofa: 'Sofa',
      soundproof: 'Cách âm',
      tivi: 'Tivi',
      toiletries: 'Vệ sinh cá nhân',
      towels: 'Khăn tắm',
      wine: 'Rượu'
    },
    room_views: {
      beach: 'Bãi biển',
      city: 'Thành phố',
      lake: 'Hồ',
      mountain: 'Núi',
      private_balcony: 'Ban công riêng',
      bay: 'Vịnh',
      sea: 'Biển',
      ocean: 'Đại dương',
      garden: 'Vườn',
      river: 'Hồ'
    },
    sold_out: 'Hết phòng',
    add_to_cart: 'Thêm vào giỏ',
    book_now: 'Đặt ngay'
  },

  ho_chi_minh: 'Hồ Chí Minh',
  ha_noi: 'Hà Nội',
  phu_quoc: 'Phú Quốc',
  hoi_an: 'Hội An',
  da_nang: 'Đà Nẵng',
  khanh_hoa: 'Khánh Hoà'
}
