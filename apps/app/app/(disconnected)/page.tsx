'use client'

import { Button } from "ui";
import Logo from 'ui/beeyoo-jaune-png.png'

export default function Web() {
  return (
    <div>
      <img src={Logo.src} width={Logo.width} />
      <h1>Web</h1>
      <Button />
    </div>
  );
}
