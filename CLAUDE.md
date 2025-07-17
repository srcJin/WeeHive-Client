# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

WeeHive-Client is a multi-platform mobile application built with Taro framework, featuring both a cross-platform client (`client_taro`) and a Next.js web client (`client_react`). The project includes a Rick and Morty wiki application with character exploration, mapping, and community features.

## Primary Development Commands

### Taro Cross-Platform Client (`client_taro/`)

**Development:**

```bash
cd client_taro
npm run dev                    # Build for WeChat mini-program with watch mode
npm run dev:weapp             # WeChat mini-program development
npm run dev:h5                # H5 web development
npm run dev:rn                # React Native development with QR code
```

**Production Builds:**

```bash
npm run build                 # Build for WeChat mini-program
npm run build:weapp           # WeChat mini-program build
npm run build:h5              # H5 web build
npm run build:rn              # React Native build
npm run build:android         # Android APK build
npm run build:ios             # iOS build
```

**React Native Specific:**

```bash
npm run podinstall            # Install iOS CocoaPods dependencies
npm run ios1 && npm run ios2 && npm run ios3    # iOS development sequence
npm run and1 && npm run and2 && npm run and3    # Android development sequence
```

**Icon Generation:**

```bash
npm run icon                  # Generate icon fonts from iconfont.json
```

### Next.js Web Client (`client_react/`)

```bash
cd client_react
npm run dev                   # Development server
npm run build                 # Production build
npm run start                 # Start production server
npm run lint                  # Run ESLint
```

## Architecture Overview

### Taro Client Structure

**State Management:**

- Uses Redux with Redux Thunk for async actions
- Redux DevTools integration for development
- Redux Logger enabled in development mode
- Store configured in `src/store/index.ts`

**Application Configuration:**

- Multi-tab application with 4 main tabs: My Beehive, Map, Community, My Profile
- Custom navigation bar styling
- Cross-platform screen options for React Native
- Icon font integration via `useGlobalIconFont()`

**Path Aliases (configured in `config/index.js`):**

- `@actions` → `src/actions`
- `@assets` → `src/assets`
- `@components` → `src/components`
- `@constants` → `src/constants`
- `@pages` → `src/pages`
- `@reducers` → `src/reducers`
- `@style` → `src/style`
- `@utils` → `src/utils`
- `@service` → `src/service`
- `@hooks` → `src/hooks`

### Service Layer Architecture

The service layer follows a resource-based API pattern with three main endpoints:

**API Resources:**

- **Character API** (`getCharacter`): Character data and filtering
- **Episode API** (`getEpisode`): Episode information
- **Location API** (`getLocation`): Location data

**Service Methods Pattern:**

- `.all(page)` - Paginated list retrieval
- `.one(id)` - Single item by ID
- `.list(ids)` - Multiple items by ID array
- `.filt(filter)` - Filtered results with pagination

**Error Handling:**

- Network errors return empty data structures
- Invalid requests return standardized empty responses
- Status code validation (200-299 range)
- Graceful fallback with default pagination data

### Component Architecture

**Cross-Platform Components:**

- `SafeAreaView` - Platform-specific safe area handling
- `CustomScrollView` - Enhanced scrolling with platform optimizations
- `StatusBar` - Status bar management
- `Loading` - Loading state component
- `CharacterCard`, `EpisodeCard` - Data display components
- `Pagination` - Pagination controls
- `Drawer` - Navigation drawer

**Styling:**

- LESS preprocessing for styles
- Platform-specific stylesheets (`.less` for mini-program, `.rn.less` for React Native)
- Theme system in `src/style/theme.less`

## Development Guidelines

### Platform-Specific Development

**WeChat Mini-Program:**
- Default development target
- Use `npm run dev` for development
- Component naming follows mini-program conventions

**H5 Web:**
- Built with Taro's H5 target
- Uses `pxtransform` for responsive design
- Static directory: `static/`

**React Native:**
- Requires native shell setup in `taro-native-shell/`
- Bundle outputs configured for iOS and Android
- Platform-specific asset handling

### Code Structure Conventions

**File Organization:**

- Each component has its own directory with `index.tsx`, `index.less`, and `index.rn.less`
- Type definitions in `type.d.ts` files
- Constants organized by feature domain

**State Management:**

- Actions in `src/actions/` with async thunk pattern
- Reducers in `src/reducers/` with feature-based organization
- Service calls handled through Redux actions

**Asset Management:**

- Icons via `taro-iconfont-cli` configuration
- Images in `src/assets/image/` with index exports
- Tab icons in `src/assets/tab/`

## Testing and Quality

**Linting:**

- ESLint with TypeScript support
- Taro-specific ESLint configuration
- React and React Hooks plugins

**Build Configuration:**

- Development and production configs in `config/`
- Environment-specific constants via `defineConstants`
- Platform-specific build outputs

## Documentation Reference Strategy

**Taro 4 Documentation (`taro_4_doc/`):**

The repository includes complete Taro 4 documentation for reference. When working with Taro-specific features, always consult the relevant documentation:

- **API Reference:** `taro_4_doc/apis/` - Complete API documentation organized by category
- **Component Reference:** `taro_4_doc/components/` - All available Taro components with examples
- **Framework Guides:** `taro_4_doc/react-*.md` - React-specific Taro patterns
- **Platform Guides:** `taro_4_doc/harmony/`, `taro_4_doc/h5.md` - Platform-specific implementations
- **Best Practices:** `taro_4_doc/best-practice.md` - Official best practices guide

**Key Documentation Files:**

- `taro_4_doc/config-detail.md` - Complete configuration options
- `taro_4_doc/component-style.md` - Component styling guidelines
- `taro_4_doc/request.md` - Network request patterns
- `taro_4_doc/router.md` - Navigation and routing
- `taro_4_doc/state.md` - State management patterns
- `taro_4_doc/hooks.md` - Taro-specific hooks usage

**Reference Implementations:**

- `taro_references/` - Working example projects
- `taro_references/rick-and-morty-wiki-master/` - Similar project structure
- `taro_references/taro-playground/` - Advanced Taro patterns

**Usage Guidelines:**

1. **Always check documentation first** before implementing Taro-specific features
2. **Follow official patterns** from the documentation rather than improvising
3. **Cross-reference with existing code** in the project for consistency
4. **Use the API reference** for exact method signatures and parameters
5. **Consult best practices** for performance and cross-platform compatibility

The repository includes comprehensive documentation in `taro_4_doc/` and reference implementations in `taro_references/` for learning Taro framework patterns and best practices.
