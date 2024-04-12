import Optiontitle from '@/components/Optiontitle';
import { Card } from '@/components/ui/card';
import React from 'react'
const fontOptions = [
    'Arial',
    'Helvetica',
    'Times New Roman',
    'Courier New',
    'Verdana',
    'Georgia',
    'Palatino',
    'Garamond',
    'Comic Sans MS',
    'Trebuchet MS',
    'Arial Black',
    'Impact',
  ];

function page() {
  return (
    <section>
        <Optiontitle title='Font Text'/>
        <div className=' grid grid-cols-2 gap-3'>
        {fontOptions.map((font,i) => (
            <Card className=' p-5' key={i} style={{ fontFamily: font, marginTop: '1rem' }}>
            {/* {selectedFont ? 'Sample Text' : 'Select a font to see a preview'} */}
            Hand writing
          </Card>
        ))}
        </div>
    </section>
  )
}

export default page