import hanoi from '@/assets/images/hanoi_resize.jpg'
import hochiminh from '@/assets/images/saigon_resize.jpg'
import nhatrang from '@/assets/images/nhatrang_resize.jpg'
import phuquoc from '@/assets/images/phuquoc_resize.jpg'

const locations = [
  {
    name: 'Thành phố Hà Nội',
    code: 1,
    division_type: 'thành phố trung ương',
    codename: 'thanh_pho_ha_noi',
    image: hanoi
  },
  {
    name: 'Thành phố Hồ Chí Minh',
    code: 79,
    division_type: 'thành phố trung ương',
    codename: 'thanh_pho_ho_chi_minh',
    image: hochiminh
  },
  {
    name: 'Tỉnh Khánh Hòa',
    code: 56,
    division_type: 'tỉnh',
    codename: 'tinh_khanh_hoa',
    image: nhatrang
  },
  {
    name: 'Tỉnh Kiên Giang',
    code: 91,
    division_type: 'tỉnh',
    codename: 'tinh_kien_giang',
    image: phuquoc
  }
]

export { locations }
