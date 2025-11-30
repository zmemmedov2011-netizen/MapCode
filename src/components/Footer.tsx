import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Mail, MapPin, Phone } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerColumns = [{
    title: 'Haqqında',
    links: [{
      label: 'Haqqımızda',
      path: '/about'
    }, {
      label: 'Komanda',
      path: '/about#team'
    }, {
      label: 'Karyera',
      path: '/about#careers'
    }]
  }, {
    title: 'Kəşf et',
    links: [{
      label: 'Bölgələr',
      path: '/regions'
    }, {
      label: 'Top Marşrutlar',
      path: '/regions#top-routes'
    }, {
      label: 'Xəritə',
      path: '/#map'
    }]
  }, {
    title: 'Dəstək',
    links: [{
      label: 'Suallar',
      path: '/faq'
    }, {
      label: 'Əlaqə',
      path: '/contact'
    }, {
      label: 'Problem bildir',
      path: '/report'
    }]
  }];
  return <footer className="w-full bg-[#071835] border-t border-[#0E5BB5]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 group mb-4">
              <Mountain className="w-8 h-8 text-[#1EA3FF] group-hover:text-[#0E5BB5] transition-colors" />
              <span className="text-xl font-bold text-[#E9F0FF]">
                MapCode.az
              </span>
            </Link>
            <p className="text-[#B6C7E6] text-sm mb-6 max-w-sm">
              Azərbaycanın bütün bölgələrini, xüsusilə dağlıq əraziləri kəşf
              etmək üçün rəqəmsal platforma.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-[#B6C7E6] text-sm">
                <Mail className="w-4 h-4 text-[#1EA3FF]" />
                <span>info@mapcode.az</span>
              </div>
              <div className="flex items-center space-x-2 text-[#B6C7E6] text-sm">
                <Phone className="w-4 h-4 text-[#1EA3FF]" />
                <span>+994 12 345 67 89</span>
              </div>
              <div className="flex items-center space-x-2 text-[#B6C7E6] text-sm">
                <MapPin className="w-4 h-4 text-[#1EA3FF]" />
                <span>Bakı, Azərbaycan</span>
              </div>
            </div>
          </div>

          {/* Footer Columns */}
          {footerColumns.map(column => <div key={column.title}>
              <h3 className="text-[#E9F0FF] font-semibold mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map(link => <li key={link.path}>
                    <Link to={link.path} className="text-[#B6C7E6] text-sm hover:text-[#1EA3FF] transition-colors">
                      {link.label}
                    </Link>
                  </li>)}
              </ul>
            </div>)}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#0E5BB5]/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#B6C7E6] text-sm">
              © {currentYear} MapCode.az. Bütün hüquqlar qorunur.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-[#B6C7E6] text-sm hover:text-[#1EA3FF] transition-colors">
                Məxfilik Siyasəti
              </Link>
              <Link to="/terms" className="text-[#B6C7E6] text-sm hover:text-[#1EA3FF] transition-colors">
                İstifadə Şərtləri
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}