import NavBar from './components/NavBar';
import Cierre from './sections/Cierre';
import Company from './sections/Company';
import Formula from './sections/Formula';
import Historia from './sections/Historia';
import Portada from './sections/Portada';
import Proposito from './sections/Proposito';
import QuienesSomos from './sections/QuienesSomos';
import Slogan from './sections/Slogan';
import Team from './sections/Team';
import Tratarte from './sections/Tratarte';
import Valores from './sections/Valores';

// Order drives the page — sections stack top to bottom in a normal
// scrolling document. NavBar's anchors point at these same ids.
const SECTIONS = [
  { id: 'portada', theme: 'light', Content: Portada },
  { id: 'slogan', theme: 'dark', Content: Slogan },
  { id: 'proposito', theme: 'light', Content: Proposito },
  { id: 'quienes-somos', theme: 'dark', Content: QuienesSomos },
  { id: 'historia', theme: 'light', Content: Historia },
  { id: 'company', theme: 'dark', Content: Company },
  { id: 'valores', theme: 'light', Content: Valores },
  { id: 'formula', theme: 'dark', Content: Formula },
  { id: 'tratarte', theme: 'light', Content: Tratarte },
  { id: 'team', theme: 'dark', Content: Team },
  { id: 'cierre', theme: 'light', Content: Cierre },
];

const THEME = {
  light: { mode: 'light', bg: '#F2F2F2', text: '#0D5257', subtext: '#4B4E53' },
  dark: { mode: 'dark', bg: '#0D5257', text: '#FFFFFF', subtext: 'rgba(255,255,255,0.72)' },
};

export default function App() {
  return (
    <div className="w-full">
      <NavBar />

      {SECTIONS.map(({ id, theme: themeKey, Content }) => {
        const theme = THEME[themeKey];
        return (
          <section
            key={id}
            id={id}
            className="relative w-full overflow-hidden"
            style={{ backgroundColor: theme.bg, color: theme.text }}
          >
            <Content theme={theme} />
          </section>
        );
      })}
    </div>
  );
}
