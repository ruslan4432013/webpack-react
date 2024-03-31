# Проект с настройкой Webpack для React (Module Federation)

Этот проект содержит конфигурацию Webpack с использованием следующих плагинов и лоадеров:

## Плагины:

- ***@pmmmwh/react-refresh-webpack-plugin:*** Обеспечивает горячую перезагрузку (hot reload) для React-компонентов во
  время разработки.
- ***@svgr/webpack:*** Позволяет использовать SVG-файлы в React-приложениях как компоненты.
- ***copy-webpack-plugin:*** Копирует файлы или каталоги во время сборки проекта.
- ***html-webpack-plugin:*** Создает HTML-файл для вашего приложения на основе шаблона HTML и автоматически вставляет в
  него ссылки на сгенерированные бандлы JavaScript.
- ***mini-css-extract-plugin:*** Извлекает CSS из JavaScript-бандлов в отдельные файлы CSS для оптимизации загрузки
  страницы.
- ***webpack-bundle-analyzer:*** Предоставляет визуализацию размера и состава бандлов Webpack.

## Лоадеры

- ***babel-loader:*** Транспилирует JavaScript-файлы с использованием Babel.
- ***css-loader:*** Загружает CSS-файлы и разрешает им импортировать другие CSS-файлы и ресурсы, такие как изображения и
  шрифты.
- ***sass-loader:*** Трансформирует SASS/SCSS в CSS.
- ***style-loader:*** Вставляет CSS в DOM через тег <style>.
- ***ts-loader:*** Транспилирует TypeScript в JavaScript.
- ***fork-ts-checker-webpack-plugin:*** Позволяет запускать TypeScript type checking в отдельном процессе для ускорения
  сборки.

## Скрипты

- `start` Запускает приложение в режиме разработки с поддержкой горячей перезагрузки.
- `build:dev` Собирает проект для разработки.
- `build:prod` Собирает проект для продакшена.
- `build:mobile` Собирает проект для мобильной платформы.
- `build:desktop` Собирает проект для десктопной платформы.

## Установка

1. Клонируйте репозиторий

```shell
git clone https://github.com/ruslan4432013/webpack-react.git
```

2. Установите зависимости

```shell
npm install
```

## Использование

Смотрите раздел "Скрипты" для подробной информации о запуске и сборке проекта.

Конфигурационный файл написан на typescript, конфигурация webpack со всеми плагинами и лоадерами находится в папке `config/build`

### Объявление env-переменных, доступных в сборке

При необходимости в добавлении env-переменных необходимо их объявить в `config/build/plugins.build.ts` по примеру:

```typescript
new DefinePlugin({
  __PLATFORM__: JSON.stringify(platform),
  __ENV__: JSON.stringify(mode),
  // Ваши переменные
})
```

Использование в коде: 
```typescript jsx
export const App = () => {
  
  if (__ENV__ === 'development') {
    return <DevelopmentView/>
  }

  return <ProductionView/>
}
```
