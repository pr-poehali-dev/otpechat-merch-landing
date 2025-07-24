import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Вышивка",
      description: "Профессиональная машинная вышивка логотипов и дизайнов",
      icon: "Scissors",
      features: ["Любые размеры", "Высокое качество", "Быстрые сроки"]
    },
    {
      title: "Шевроны",
      description: "Изготовление нашивок и шевронов для форменной одежды",
      icon: "Shield",
      features: ["Тканевые", "Резиновые", "Кожаные"]
    },
    {
      title: "DTF печать",
      description: "Современная технология прямой печати на ткани",
      icon: "Printer",
      features: ["Яркие цвета", "Долговечность", "Детализация"]
    },
    {
      title: "Термопечать",
      description: "Нанесение изображений методом термопереноса",
      icon: "Flame",
      features: ["Быстро", "Качественно", "Доступно"]
    },
    {
      title: "Аппликация",
      description: "Декоративное оформление текстильных изделий",
      icon: "Layers",
      features: ["Ручная работа", "Уникальный дизайн", "Прочность"]
    },
    {
      title: "Сублимация",
      description: "Полноцветная печать с глубоким проникновением краски",
      icon: "Palette",
      features: ["Полный цвет", "Не выгорает", "Мягкая на ощупь"]
    }
  ];

  const portfolio = [
    {
      title: "Корпоративная форма",
      description: "Вышивка логотипов на рубашках",
      category: "Вышивка",
      image: "/img/50f9d64f-bce9-46d6-944c-ca3d9070f247.jpg"
    },
    {
      title: "Военные нашивки",
      description: "Тканевые шевроны по ТЗ",
      category: "Шевроны",
      image: "/img/8bb26d31-23bf-4c97-9a59-067faa6b1c02.jpg"
    },
    {
      title: "Спортивная команда",
      description: "DTF печать номеров и имен",
      category: "DTF",
      image: "/img/c89b14dd-e982-4ae0-b12f-de3a60705438.jpg"
    },
    {
      title: "Промо-футболки",
      description: "Термопечать для мероприятия",
      category: "Термопечать"
    }
  ];

  return (
    <div className="min-h-screen bg-industrial-black text-white">
      {/* Header */}
      <header className="border-b dotted-border bg-industrial-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-lemon text-industrial-black px-3 py-1 tag-shape font-bold text-sm">
                OTPECHAT
              </div>
              <span className="text-steel-gray font-mono text-sm">MERCH STUDIO</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#services" className="hover:text-lemon transition-colors dotted-underline">Услуги</a>
              <a href="#portfolio" className="hover:text-lemon transition-colors dotted-underline">Портфолио</a>
              <a href="#contact" className="hover:text-lemon transition-colors dotted-underline">Контакты</a>
            </nav>
            <Icon name="Menu" className="md:hidden text-lemon" size={24} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="border-r border-dashed border-steel-gray"></div>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-steel-gray/20 px-4 py-2 rounded-full dotted-border mb-6">
                <Icon name="Tag" className="text-lemon" size={16} />
                <span className="text-sm font-mono">ПРОФЕССИОНАЛЬНОЕ КАЧЕСТВО</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-lemon">OTPECHAT</span>
              <br />
              <span className="text-steel-gray font-mono italic">merch studio</span>
            </h1>
            <p className="text-xl mb-8 text-steel-gray max-w-2xl mx-auto font-mono">
              Изготавливаем качественный мерч на заказ. Вышивка, печать, шевроны — полный цикл производства под ключ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-lemon text-industrial-black hover:bg-lemon/90 font-bold px-8 py-3">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                ЗАКАЗАТЬ МЕРЧ
              </Button>
              <Button variant="outline" size="lg" className="border-steel-gray text-steel-gray hover:bg-steel-gray/10 font-mono px-8 py-3">
                <Icon name="Eye" size={20} className="mr-2" />
                СМОТРЕТЬ РАБОТЫ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-steel-gray/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Icon name="Settings" className="text-lemon" size={24} />
              <span className="text-lemon font-mono text-sm tracking-wider">НАШИ УСЛУГИ</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Полный спектр услуг</h2>
            <p className="text-steel-gray font-mono max-w-2xl mx-auto">
              От простой печати до сложной вышивки — реализуем любые идеи на текстиле
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-industrial-black/80 border-steel-gray/30 hover:border-lemon/50 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-lemon/10 p-2 rounded-lg dotted-border group-hover:bg-lemon/20 transition-colors">
                      <Icon name={service.icon as any} className="text-lemon" size={24} />
                    </div>
                    <div className="bg-lemon text-industrial-black px-2 py-1 text-xs font-bold tag-shape">
                      {service.title.toUpperCase()}
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-steel-gray font-mono">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm">
                        <Icon name="Check" className="text-lemon" size={16} />
                        <span className="text-steel-gray font-mono">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Icon name="Image" className="text-lemon" size={24} />
              <span className="text-lemon font-mono text-sm tracking-wider">ПОРТФОЛИО</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Наши работы</h2>
            <p className="text-steel-gray font-mono max-w-2xl mx-auto">
              Примеры выполненных заказов — от корпоративной формы до спортивного мерча
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item, index) => (
              <Card key={index} className="bg-steel-gray/10 border-steel-gray/30 hover:border-lemon/50 transition-all duration-300 group overflow-hidden">
                <div className="aspect-square relative">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-steel-gray/20 to-industrial-black/40 flex items-center justify-center">
                      <div className="text-center">
                        <Icon name="Package" className="text-lemon/50 mb-2" size={48} />
                        <div className="bg-lemon text-industrial-black px-2 py-1 text-xs font-bold tag-shape">
                          {item.category}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-industrial-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-lemon text-industrial-black px-2 py-1 text-xs font-bold tag-shape">
                      {item.category}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold mb-1">{item.title}</h3>
                    <p className="text-steel-gray text-sm font-mono">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-steel-gray/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Icon name="MessageSquare" className="text-lemon" size={24} />
              <span className="text-lemon font-mono text-sm tracking-wider">КОНТАКТЫ</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Оформить заказ</h2>
            <p className="text-steel-gray font-mono max-w-2xl mx-auto">
              Свяжитесь с нами для обсуждения вашего проекта. Ответим быстро и предложим лучшее решение.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-industrial-black/80 border-steel-gray/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Icon name="Send" className="text-lemon" size={20} />
                  <span>Заявка на заказ</span>
                </CardTitle>
                <CardDescription className="text-steel-gray font-mono">
                  Опишите ваш проект и мы свяжемся с вами
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input 
                  placeholder="Ваше имя" 
                  className="bg-steel-gray/10 border-steel-gray/30 text-white placeholder:text-steel-gray font-mono"
                />
                <Input 
                  placeholder="Телефон или email" 
                  className="bg-steel-gray/10 border-steel-gray/30 text-white placeholder:text-steel-gray font-mono"
                />
                <Textarea 
                  placeholder="Опишите ваш заказ: что нужно изготовить, количество, сроки..."
                  className="bg-steel-gray/10 border-steel-gray/30 text-white placeholder:text-steel-gray font-mono min-h-[120px]"
                />
                <Button className="w-full bg-lemon text-industrial-black hover:bg-lemon/90 font-bold">
                  <Icon name="Send" size={20} className="mr-2" />
                  ОТПРАВИТЬ ЗАЯВКУ
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-industrial-black/80 border-steel-gray/30">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-lemon/10 p-3 rounded-lg dotted-border">
                      <Icon name="Clock" className="text-lemon" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-2">Время работы</h3>
                      <p className="text-steel-gray font-mono text-sm">
                        Пн-Пт: 9:00-18:00<br />
                        Сб: 10:00-16:00<br />
                        Вс: выходной
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-industrial-black/80 border-steel-gray/30">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-lemon/10 p-3 rounded-lg dotted-border">
                      <Icon name="MapPin" className="text-lemon" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-2">Адрес</h3>
                      <p className="text-steel-gray font-mono text-sm">
                        г. Москва<br />
                        ул. Производственная, 15<br />
                        Офис 204
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-industrial-black/80 border-steel-gray/30">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-lemon/10 p-3 rounded-lg dotted-border">
                      <Icon name="Phone" className="text-lemon" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-2">Контакты</h3>
                      <p className="text-steel-gray font-mono text-sm">
                        +7 (495) 123-45-67<br />
                        info@otpechat.studio<br />
                        @otpechat_merch
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-industrial-black border-t dotted-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-lemon text-industrial-black px-3 py-1 tag-shape font-bold text-sm">
                  OTPECHAT
                </div>
                <span className="text-steel-gray font-mono text-sm">MERCH STUDIO</span>
              </div>
              <p className="text-steel-gray font-mono text-sm">
                Профессиональное изготовление мерча на заказ. Качество, скорость, индивидуальный подход.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm font-mono">
                <li><a href="#" className="text-steel-gray hover:text-lemon transition-colors">Вышивка</a></li>
                <li><a href="#" className="text-steel-gray hover:text-lemon transition-colors">Шевроны</a></li>
                <li><a href="#" className="text-steel-gray hover:text-lemon transition-colors">DTF печать</a></li>
                <li><a href="#" className="text-steel-gray hover:text-lemon transition-colors">Термопечать</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-steel-gray/20 p-2 rounded-lg hover:bg-lemon/20 transition-colors dotted-border">
                  <Icon name="Instagram" className="text-lemon" size={20} />
                </a>
                <a href="#" className="bg-steel-gray/20 p-2 rounded-lg hover:bg-lemon/20 transition-colors dotted-border">
                  <Icon name="MessageCircle" className="text-lemon" size={20} />
                </a>
                <a href="#" className="bg-steel-gray/20 p-2 rounded-lg hover:bg-lemon/20 transition-colors dotted-border">
                  <Icon name="Mail" className="text-lemon" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t dotted-border mt-8 pt-8 text-center">
            <p className="text-steel-gray font-mono text-sm">
              © 2024 OTPECHAT MERCH STUDIO. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;