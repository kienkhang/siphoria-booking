import platinumImg from '@/assets/images/card/platinum.png'
import diamondImg from '@/assets/images/card/diamond.png'
import goldImg from '@/assets/images/card/gold.png'
import silverImg from '@/assets/images/card/silver.png'

type TCard = 'gold' | 'silver' | 'platinum' | 'diamond'
function useCardMember() {
  // ===================== DEFINE 4 TYPES BACKGROUND ====================
  const backgrounds = ref({
    silver: {
      background: `url('${silverImg}') no-repeat center/cover`
    },
    gold: {
      background: `url('${goldImg}') no-repeat center/cover`
    },
    platinum: {
      background: `url('${platinumImg}') no-repeat center/cover`
    },
    diamond: {
      background: `url('${diamondImg}') no-repeat center/cover`
    }
  })

  // ===================== DEFINE 3 TYPES TEXT =====================

  const texts = ref({
    silver: {
      color: 'white'
    },
    gold: {
      color: 'white'
    },
    platinum: {
      background:
        'linear-gradient(270deg, #CFCFCF 0%, #FFFFFF 23%, #C6C6C6 41%, #E4E4E4 59%, #989898 77%, #9E9E9E 100%)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      'background-clip': 'text',
      'text-fill-color': 'transparent',
      'text-shadow': '0px 0px 5px rgba(0, 0, 0, 0.25)'
    },
    diamond: {
      background:
        'linear-gradient(270deg, #FBC926 -12.39%, #E7D28E -12.38%, #C3922E 128.28%, #DBCEA5 128.29%)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      'background-clip': 'text',
      'text-fill-color': 'transparent',
      'text-shadow': '0px 0px 5px rgba(0, 0, 0, 0.25)'
    }
  })
  // ===================== DEFINE BENEFIT =====================

  const benefits = ref({
    silver: {
      id: 'silver',
      rank_id: 'f4c363f1-a942-4f39-8f92-9ae93ed42966',
      price: 0,
      name: 'Silver',
      cashback: 0.01,
      member_gift: false,
      priority_checkin: false
    },
    gold: {
      id: 'gold',
      rank_id: 'e4aabc1c-dd29-47c3-84b9-f56d0cb72e66',
      price: 1000000,
      name: 'Gold',
      cashback: 0.03,
      member_gift: true,
      priority_checkin: false
    },
    platinum: {
      id: 'platinum',
      rank_id: 'e39df027-d9e9-49a8-aa4b-b7047266f02d',
      price: 3000000,
      name: 'Platinum',
      cashback: 0.05,
      member_gift: true,
      priority_checkin: false
    },
    diamond: {
      id: 'diamond',
      rank_id: 'f6bf35e5-73a7-45c9-8c61-ae6c6a40e912',
      price: 5000000,
      name: 'Diamond',
      cashback: 0.07,
      member_gift: true,
      priority_checkin: true
    }
  })

  // =============== CALCULATE USER RANK ==============
  function generateCard(card: TCard) {
    return {
      background: backgrounds.value[card],
      text: texts.value[card],
      benefit: benefits.value[card]
    }
  }

  function getTypeByRank(rankId: string | undefined): TCard {
    switch (rankId) {
      case 'f4c363f1-a942-4f39-8f92-9ae93ed42966':
        return 'silver'

      case 'e4aabc1c-dd29-47c3-84b9-f56d0cb72e66':
        return 'gold'

      case 'e39df027-d9e9-49a8-aa4b-b7047266f02d':
        return 'platinum'

      case 'f6bf35e5-73a7-45c9-8c61-ae6c6a40e912':
        return 'diamond'

      default:
        return 'silver'
    }
  }

  return {
    benefits,
    backgrounds,
    texts,
    generateCard,
    getTypeByRank
  }
}

export { useCardMember }
