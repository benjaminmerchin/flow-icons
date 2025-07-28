# Flow Icons

A beautiful collection of **110 React icons** with clean SVG design, available in both **outline** and **filled** variants.

![Flow Icons Preview](./icon-preview.png)

## ✨ Features

- 🎨 **110 unique icons** with consistent design
- 🔄 **Dual variants**: Outline and Filled versions
- ⚛️ **React + TypeScript** components
- 🎯 **Fully typed** with TypeScript interfaces
- 🎛️ **Customizable**: Size, color, and variant props
- 📦 **Tree-shakable** imports
- 🚀 **Production ready**

## 📦 Installation

```bash
npm install flow-icons
```

## 🚀 Usage

### Basic Usage

```tsx
import { Heart, Star, Settings } from 'flow-icons';
import type { FlowIcon } from 'flow-icons';

function App() {
  return (
    <div>
      {/* Default outline version */}
      <Heart />
      
      {/* Filled version */}
      <Star filled />
      
      {/* Custom size with className and onClick */}
      <Settings 
        size={32} 
        className="text-pink-500 hover:text-pink-600 cursor-pointer" 
        onClick={() => console.log('Settings clicked!')}
      />
    </div>
  );
}

// Using FlowIcon type for props
interface ButtonProps {
  icon: FlowIcon;
  label: string;
}

function IconButton({ icon: Icon, label }: ButtonProps) {
  return (
    <button className="flex items-center gap-2">
      <Icon size={16} />
      {label}
    </button>
  );
}
```

### Advanced Usage with Types

```tsx
import { 
  AlertCircle, 
  AlertCircleOutline, 
  AlertCircleFilled,
  Heart,
  Settings 
} from 'flow-icons';
import type { FlowIcon, FlowIconFilled } from 'flow-icons';

function Notifications() {
  return (
    <div>
      {/* Smart component with all SVG props */}
      <AlertCircle 
        filled={true} 
        size={24} 
        className="text-red-500 hover:scale-110 transition-transform" 
        onClick={() => alert('Alert!')}
        style={{ cursor: 'pointer' }}
      />
      
      {/* Direct variant usage with custom props */}
      <AlertCircleOutline 
        size="1.5rem" 
        className="hover:text-blue-500"
        onMouseEnter={() => console.log('Hover!')}
      />
      
      <AlertCircleFilled 
        size={20} 
        className="text-green-500"
        data-testid="success-icon"
      />
    </div>
  );
}

// Advanced typing examples
interface IconMapProps {
  mainIcons: FlowIcon[];      // Can be filled
  variantIcons: FlowIconVariant[]; // Specific variants
}

const iconMap: Record<string, FlowIcon> = {
  heart: Heart,               // Can use filled={true}
  settings: Settings,         // Can use filled={true}  
  alert: AlertCircle,         // Can use filled={true}
};

function DynamicIcon({ name, filled }: { 
  name: keyof typeof iconMap;
  filled?: boolean;
}) {
  const Icon = iconMap[name];
  return <Icon className="w-5 h-5" filled={filled} />;
}
```

## 🎛️ Props

All icon components extend `React.SVGProps<SVGSVGElement>` and accept these props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Icon size (px or any CSS unit) |
| `filled` | `boolean` | `false` | Show filled variant (main components only) |
| `className` | `string` | - | CSS classes for styling |
| `onClick` | `function` | - | Click event handler |
| `style` | `object` | - | Inline styles |
| `...props` | `SVGProps` | - | All standard SVG element props |

### 📝 TypeScript Types

Flow Icons exports TypeScript types for better development experience:

```tsx
import type { 
  FlowIcon,              // Main icon component type (supports filled prop)
  FlowIconVariant,       // Outline/Filled variant component type
  FlowIconProps,         // Props for main icons (with filled)
  FlowIconVariantProps   // Props for variant icons (no filled)
} from 'flow-icons';

// Use in component props
interface HeaderProps {
  logo: FlowIcon;        // Heart, Settings, etc. (can be filled)
  actions: FlowIcon[];   // Array of main components
}

// Use in dynamic icon maps
const statusIcons: Record<string, FlowIcon> = {
  success: Check,        // Can use filled={true}
  error: AlertCircle,    // Can use filled={true}
  warning: AlertTriangle, // Can use filled={true}
};

// For specific variants
const outlineIcons: Record<string, FlowIconVariant> = {
  heart: HeartOutline,   // No filled prop
  star: StarOutline,     // No filled prop
};
```

### 🎨 Styling

```tsx
{/* Color via CSS classes (recommended) */}
<Heart className="text-red-500" />

{/* Color via style prop */}
<Heart style={{ color: '#e91e63' }} />

{/* Size via className */}
<Heart className="w-8 h-8" />

{/* Events and interactions */}
<Heart 
  className="hover:text-red-500 cursor-pointer" 
  onClick={() => console.log('❤️')}
  onMouseEnter={() => setHovered(true)}
/>
```

## 📚 Available Icons

### Categories

- **Arrows**: ArrowUp, ArrowDown, ArrowLeft, ArrowRight, etc.
- **Actions**: Plus, Minus, Check, X, etc.
- **UI Elements**: Bars, Settings, Bell, Heart, etc.
- **Communication**: Phone, Enveloppe, Microphone, etc.
- **Media**: Play, Camera, Picture, Speaker, etc.
- **Files**: File, Folder, FloppyDisk, etc.
- **And many more...**

### Complete Icon List

<details>
<summary>View all 110 icons</summary>

- AlertCircle, AlertTriangle
- Android, ArrowBottomTop, ArrowDown, ArrowDownLeft, ArrowDownRight
- ArrowLeft, ArrowLeftRight, ArrowLineLeft, ArrowLineRight, ArrowRight
- ArrowRightLeft, ArrowSplitDiagonal, ArrowSplitHorizontal, ArrowSplitVertical
- ArrowTopBottom, ArrowUp, ArrowUpLeft, ArrowUpRight, Bars, Bell
- BellSlash, Bolt, BoltSlash, Book, Bookmark, Brush, Bubble
- Cake, Calendar, Camera, Chart, Check, ChevronDown, ChevronLeft
- ChevronRight, ChevronUp, ChevronUpDown, CircleArrowUpRight, Clipboard
- CreditCard, Crosshair, DataBase, DotsSixVertical, Ear, EarOff
- Enveloppe, Euro, Eye, EyeSlash, File, FloppyDisk, Folder
- GameController, Gauge, Globe, Hand, Heart, Information, Invoice
- Iphone, LineArrowLeft, LineArrowRight, Link, ListItem, Lock
- MagicWand, MagnifyingGlass, MapPin, Microphone, Minus, Pencil
- PencilVertical, Person, Phone, Picture, Pin, Play, PlayCircle
- Plus, Popper, PuzzlePiece, QuestionMark, Quote, Separate
- Settings, Shuffle, SpeakerOff, SpeakerOn, SpeakerSlash
- SquareArrowDown, SquareArrowDownLeft, SquareArrowDownRight
- SquareArrowIn, SquareArrowOut, SquareArrowUp, SquareArrowUpLeft
- SquareArrowUpRight, SquareSquarePlus, Squares, Star, SubtractCircle
- SubtractSquare, Trash, Trophy, Umbrella, VoleyBall, Wifi, X

</details>

## 🛠️ Development

### Project Structure

```
flow-icons/
├── src/icons/           # Generated React components
├── svg/                 # Source SVG files
├── generate-icons.js    # Generation script
└── dist/               # Built package
```

### Building

```bash
npm run build
```

### Regenerating Icons

If you modify the SVG files, regenerate the components:

```bash
node generate-icons.js
```

## 🎨 Design Philosophy

- **Consistent**: All icons follow the same 24x24 grid and visual weight
- **Clean**: Minimalist design with clear, recognizable shapes
- **Flexible**: Easily customizable colors and sizes
- **Accessible**: High contrast and clear visual hierarchy

## 📄 License

Apache 2.0 License - see [LICENSE](./LICENSE) file for details.

## 👥 Credits

- **Design**: Gauthier Niglio
- **Development**: Benjamin Merchin