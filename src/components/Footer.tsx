import { Heart, Github, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12" data-id="bvlrmidjm" data-path="src/components/Footer.tsx">
      <div className="container mx-auto px-4" data-id="ciprpzv3z" data-path="src/components/Footer.tsx">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-id="x94vv2icw" data-path="src/components/Footer.tsx">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2" data-id="f6l74z7tk" data-path="src/components/Footer.tsx">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent" data-id="mkdlpga6z" data-path="src/components/Footer.tsx">
              Labubu's Gallery
            </h3>
            <p className="text-gray-300 mb-4" data-id="g94xgdsoc" data-path="src/components/Footer.tsx">
              Explore the magical world of Labubu and discover every wonderful moment. Here we gather the most comprehensive Labubu collection, let's share this joy and beauty together.
            </p>
            <div className="flex space-x-4" data-id="4an6eofba" data-path="src/components/Footer.tsx">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-pink-400" data-id="b3bl4m5j4" data-path="src/components/Footer.tsx">
                <Instagram className="h-5 w-5" data-id="vvhh92ee7" data-path="src/components/Footer.tsx" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-pink-400" data-id="bvu9kxdeo" data-path="src/components/Footer.tsx">
                <Twitter className="h-5 w-5" data-id="ryo763s0m" data-path="src/components/Footer.tsx" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-pink-400" data-id="4hpmw196e" data-path="src/components/Footer.tsx">
                <Github className="h-5 w-5" data-id="dq2xk23g7" data-path="src/components/Footer.tsx" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div data-id="3m5y5azx9" data-path="src/components/Footer.tsx">
            <h4 className="text-lg font-semibold mb-4" data-id="gngcnewl8" data-path="src/components/Footer.tsx">Quick Links</h4>
            <ul className="space-y-2" data-id="iqivjz58h" data-path="src/components/Footer.tsx">
              <li data-id="aym9knx3l" data-path="src/components/Footer.tsx"><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors" data-id="nnr33tw8q" data-path="src/components/Footer.tsx">About Us</a></li>
              <li data-id="l7rcp69pz" data-path="src/components/Footer.tsx"><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors" data-id="ju2gpq979" data-path="src/components/Footer.tsx">Contact Us</a></li>
              <li data-id="nyo8bz1rh" data-path="src/components/Footer.tsx"><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors" data-id="2bbynhaz0" data-path="src/components/Footer.tsx">Privacy Policy</a></li>
              <li data-id="uhkd0pzhn" data-path="src/components/Footer.tsx"><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors" data-id="ewyptmsno" data-path="src/components/Footer.tsx">Terms of Service</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div data-id="hwbkzfa9v" data-path="src/components/Footer.tsx">
            <h4 className="text-lg font-semibold mb-4" data-id="u8ltzyi95" data-path="src/components/Footer.tsx">Browse Categories</h4>
            <ul className="space-y-2" data-id="tib8howrt" data-path="src/components/Footer.tsx">
              <li data-id="e02oovmfg" data-path="src/components/Footer.tsx"><a href="/design" className="text-gray-300 hover:text-pink-400 transition-colors" data-id="rxznry4yn" data-path="src/components/Footer.tsx">Design Series</a></li>
              <li data-id="h05fddcmd" data-path="src/components/Footer.tsx"><a href="/life" className="text-gray-300 hover:text-pink-400 transition-colors" data-id="g3m9sypml" data-path="src/components/Footer.tsx">Life Series</a></li>
              <li data-id="swbofekci" data-path="src/components/Footer.tsx"><a href="/sport" className="text-gray-300 hover:text-pink-400 transition-colors" data-id="7vmt3mjkb" data-path="src/components/Footer.tsx">Sport Series</a></li>
              <li data-id="pe6mc8qpe" data-path="src/components/Footer.tsx"><a href="/special" className="text-gray-300 hover:text-pink-400 transition-colors" data-id="k2knlwcdi" data-path="src/components/Footer.tsx">Special Series</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center" data-id="m4buy4rjo" data-path="src/components/Footer.tsx">
          <p className="text-gray-300 flex items-center justify-center" data-id="a3p3w4tps" data-path="src/components/Footer.tsx">
            Made with <Heart className="h-4 w-4 mx-1 text-pink-400" data-id="3losbkzpd" data-path="src/components/Footer.tsx" /> for Labubu fans worldwide
          </p>
          <p className="text-gray-400 text-sm mt-2" data-id="g0et6zjwf" data-path="src/components/Footer.tsx">
            © 2024 Labubu's Gallery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);

};

export default Footer;