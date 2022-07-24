import potato from '../../Assets/potato.png'
import tomato from '../../Assets/tomato.png'
import carrot from '../../Assets/carrot.png'
import onion from '../../Assets/onion.png'
import beetroot from '../../Assets/beetroot.png'
import garlic from '../../Assets/garlic.png'
import brinjal from '../../Assets/brinjal.png'
import peas from '../../Assets/peas.png'
import pepper from '../../Assets/pepper.png'
import pumpkin from '../../Assets/pumpkin.png'

export default function GetPhoto(name) {
  const data = {
    potato,
    tomato,
    carrot,
    onion,
    beetroot,
    garlic,
    pumpkin,
    peas,
    brinjal,
    pepper,
  }

  return data[name]
}
