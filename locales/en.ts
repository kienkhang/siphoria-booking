export default {
  toast: {
    notification: 'Notification',
    an_error_occurred: 'An error occurred',
    login_form: {
      success: 'Login successful',
      error: 'Login failed. Please try again'
    },
    signup_form: {
      success: 'The account registration was successful. Please check your email for verification',
      error: 'The account registration failed'
    },
    change_password_form: {
      success: 'Password changed successfully',
      error: 'Password change failed'
    },
    update_profile_form: {
      success: 'Information changed successfully',
      error: 'Information change failed'
    },
    change_avatar: {
      file_large: 'The file cannot be larger than 2MB',
      be_image: 'The file must be an image',
      success: 'Avatar changed successfully',
      error: 'Avatar change failed'
    },
    add_to_cart: {
      success: 'Added to cart successfully',
      error: 'Adding to cart failed',
      out_of_room: 'No rooms available, please try again later'
    },
    get_cart: {
      error: 'Cannot retrieve cart data'
    },
    delete_cart: {
      success: 'Order deleted successfully',
      error: 'Deleting order failed'
    },
    checkout_cart: {
      error: "You don't have any orders yet"
    },
    pay: {
      error: 'Cannot proceed with payment'
    },
    get_payment: {
      error: 'Cant not retrieve payment data'
    }
  },
  form: {
    login_form: {
      login: 'Login',
      email_placeholder: 'Enter your email',
      password: 'Password',
      password_placeholder: 'Enter your password',
      forgot: 'Forget Password ?'
    },
    signup_form: {
      signup: 'Signup',
      email_placeholder: 'Enter your email',
      password: 'Password',
      password_placeholder: 'Enter your password',
      first_name: 'First name',
      first_name_placeholder: 'Enter your first name',
      last_name: 'Last name',
      last_name_placeholder: 'Enter your last name',
      confirm_password: 'Confirm password',
      confirm_password_placeholder: 'Confirm your password'
    },
    change_password: {
      current: 'Current password',
      current_placeholder: 'Enter your current password',
      new: 'New password',
      new_placeholder: 'Enter your new password',
      confirm: 'Confirm new password',
      confirm_placeholder: 'Enter your new confirm password',
      change: 'Change'
    },
    update_profile: {
      first_name: 'First name',
      first_name_placeholder: 'Enter your first name',
      last_name: 'Last name',
      last_name_placeholder: 'Enter your last name',
      phone: 'Phone',
      phone_placeholder: 'Enter your phone number',
      change: 'Change'
    }
  },

  home_page: {
    slogan: 'The next-generation Travel Service Transaction Platform',
    popular_location: 'The top attractive destination in Vietnam',
    type_of_hotel: 'Type of hotel',
    hotel: 'Hotel',
    resort: 'Resort',
    homestay: 'Homestay'
  },

  account_page: {
    membership_rank: 'Membership rank',
    silver: 'Silver',
    gold: 'Gold',
    platinum: 'Platinum',
    diamond: 'Diamond',
    navbar: {
      profile: 'Profile',
      my_wallet: 'My Wallet',
      my_bookings: 'My Bookings',
      my_history: 'My History'
    },

    membership_card: 'Membership card',
    upgrade: 'Upgrade',
    exclusive_benefits: 'Exclusive benefits',
    benefits: {
      cashback: '{cash}%  cashback on every purchase',
      member_only_gifts: 'Member-only gifts',
      priority_check_ins: 'Priority check-ins'
    },

    personal_infomation: 'Personal Infomation',
    update_profile: 'Update Profile',
    name: 'Name',
    phone: 'Phone',
    password: '@:form.login_form.password',

    my_wallet: {
      overview: 'Overview',
      topup: 'Top up',
      history: '@:account_page.navbar.my_history',
      my_wallet: '@:account_page.navbar.my_wallet',
      total_balance: 'Total balance',
      topup_amount: 'Top-up amount',
      amount: 'Amount',
      choose_topup_method: 'Choose top-up method',
      payment_method: 'Payment method',
      topup_date: 'Top-up date',
      currency: 'Currency',
      method: 'Method',
      status: 'Status',
      success: 'Success',
      fail: 'Fail'
    },

    my_bookings: {
      cancel: 'Cancel',
      booking_id: 'Booking ID',
      room_type: 'Room',
      rate_plan: 'Rate Plan',
      more: 'More'
    }
  },

  hotel_detail_page: {
    // Hotel
    show_all_photos: 'Show all photos',
    overview: 'Overview',
    see_comments: 'See comments',
    what_you_have_in_property: 'What you have in this property',
    hotel_facilities: {
      bar: 'Bar',
      bath: 'Bath',
      beach: 'beach',
      breakfast: 'Breakfast',
      casio: 'Casino',
      fitness: 'Fitness',
      no_smoking_room: 'No smoking room',
      parking: 'Parking',
      pool: 'Pool',
      spa: 'Spa',
      wifi: 'Wifi'
    },
    hotel_types: {
      apartment: 'Apartment',
      camping: 'Camping',
      homestay: 'Homestay',
      hotel: 'Hotel',
      motel: 'Motel',
      resort: 'Resort',
      villa: 'Villa'
    },

    // Room
    average_price_per_night: 'Average price per night',
    room_quantity: '{count} room',
    night: 'Night',
    total: 'Total',
    bed: 'Bed',
    bath: 'Bath',
    adult: 'Adult',
    children: 'Children',
    adults: 'Adults',
    childrens: 'Childrens',
    where_you_will_stay: 'Where you will stay',
    room_infomation: 'Room Information',
    facilities: 'Facilities',
    views: 'Views',
    room_information: 'Room information',
    room_facilities: {
      air_conditional: 'Air conditional',
      bbq: 'BBQ',
      desk: 'Desk',
      fruit: 'Fruit',
      fryer: 'Fryer',
      hairdry: 'Hairdry',
      iron: 'Iron',
      kitchen: 'Kitchen',
      kitchen_tool: 'Kitchen Tool',
      private_pool: 'Private Pool',
      shower: 'Shower',
      slippers: 'Slippers',
      sofa: 'Sofa',
      soundproof: 'Soundproof',
      tivi: 'Tivi',
      toiletries: 'Toiletries',
      towels: 'Towels',
      wine: 'Wine'
    },
    room_views: {
      beach: 'Beach',
      city: 'City',
      lake: 'Lake',
      mountain: 'Mountain',
      private_balcony: 'Private Balcony',
      bay: 'Bay',
      sea: 'Sea',
      ocean: 'Ocean',
      garden: 'Garden',
      river: 'River'
    },
    sold_out: 'Sold out',
    add_to_cart: 'Add to cart',
    book_now: 'Book now'
  },

  ho_chi_minh: 'Ho Chi Minh',
  ha_noi: 'Ha Noi',
  phu_quoc: 'Phu Quoc',
  hoi_an: 'Hoi An',
  da_nang: 'Da Nang',
  khanh_hoa: 'Khanh Hoa'
}
