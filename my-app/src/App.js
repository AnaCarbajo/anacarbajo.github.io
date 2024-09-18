"use client"
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect, useState } from 'react'
import { IconButton } from '@mui/material';
import { Facebook } from '@mui/icons-material';
import Logo from './assets/expanded.png'
import Premios from './assets/3e6cb0d6-d2fd-42be-a603-4f17b8394046.png'
import Spinner from './components/spinner';

export default function Home() {
  const [expanded, setExpanded] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#24201d] text-center overflow-hidden">
      {loading ? <Spinner />
        :
        <div className="flex flex-col items-center justify-start h-screen bg-[#24201d] px-4 text-center overflow-hidden">
          <div className={`transition-all duration-500 ease-in-out transform ${expanded ? 'translate-y-0' : 'translate-y-10'}`}>
            <div className={`flex flex-col gap-2 items-center transition-all duration-500 ease-in-out transform ${expanded ? 'scale-75' : 'scale-100'}`} >
              <img src={Logo} height={125} width={125} alt='Bioceánico'></img>
              <h5 className={`${expanded ? 'text-xl' : 'text-md'} font-lora opacity-75 `}>VINO DE AUTOR</h5>
              <p className={`${expanded ? 'text-xl' : 'text-md'} font-lora`}>Enólogo Carlos Carbajo</p>
            </div>
            <div className={`flex flex-col gap-4 items-center transition-all duration-500 ease-in-out transform ${expanded ? 'opacity-0 translate-y-full h-4' : 'opacity-100 translate-y-0 h-auto mt-8'}`}>
              <p className="font-lora max-w-md">
                Desde los valles de Zonda nace este Bioceánico acunado 12 meses en barrica de roble francés tostado medio, resaltando las notas del petit verdot, del malbec y del syrah que lo componen.
              </p>
              <img src={Premios} width={200} height={200} alt="Premios Bioceanico" />
              <Button
                sx={{ backgroundColor: 'white', color: '#24201d', width: '18rem', fontFamily: ['Lora', 'serif'], borderRadius: '0.5rem' }}
                onClick={() => setExpanded(true)}
              >
                Más información
              </Button>
            </div>
          </div>
          <div className={`transition-all duration-500 ease-in-out transform ${expanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full mt-8'} `}>
            <div className="flex justify-center space-x-4 mb-8">
              <WhatsAppIcon sx={{ color: '#FFFF' }} onClick={() => { expanded && window.open('https://wa.me/5492644152534') }} />
              <InstagramIcon sx={{ color: '#FFFF' }} onClick={() => { expanded && window.open('https://www.instagram.com/winebioceanicosj/') }} />
              <Facebook sx={{ color: '#FFFF' }} onClick={() => { expanded && window.open('https://www.facebook.com/profile.php?id=100014235161706') }} />
              <LinkedInIcon sx={{ color: '#FFFF' }} onClick={() => { expanded && window.open('https://www.linkedin.com/in/carlos-eduardo-carbajo/') }} />
            </div>
            <div className="space-y-4 w-full max-w-md">
              <Button sx={{ backgroundColor: 'white', color: '#24201d', width: '18rem', fontFamily: ['Lora', 'serif'], borderRadius: '0.5rem' }} onClick={() => { expanded && window.open('https://www.youtube.com/watch?v=jbTyT1p1wx0&t=12s&ab_channel=VinoParaContar') }}>Entrevista Vino Para Contar</Button>
              <Button sx={{ backgroundColor: 'white', color: '#24201d', width: '18rem', fontFamily: ['Lora', 'serif'], borderRadius: '0.5rem' }} onClick={() => { expanded && window.open('https://mendoza.puntoapunto.com.ar/un-enologo-sanjuanino-creo-el-proyecto-bioceanico-un-vino-de-autor/') }}>Nota punto a punto</Button>
              <Button sx={{ backgroundColor: 'white', color: '#24201d', width: '18rem', fontFamily: ['Lora', 'serif'], borderRadius: '0.5rem' }} onClick={() => { expanded && window.open('https://www.vivino.com/bioceanico-blend-san-juan/w/6870640') }}>Opiniones Vivino</Button>
            </div>
            <div className='flex justify-center mt-10'>
              <IconButton
                sx={{ borderRadius: '9999px', backgroundColor: 'white', color: '#24201d', fontFamily: ['Lora', 'serif'] }}
                onClick={() => setExpanded(false)}
              >
                <ArrowUpwardIcon />
              </IconButton>
            </div>
          </div>

        </div>
      }
    </div>
  )
}