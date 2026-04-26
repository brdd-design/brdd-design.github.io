.PHONY: dev build preview install clean

# Start the Vite development server
dev:
	npm run dev

# Build the static site for production
build:
	npm run build

# Preview the built production site locally
preview: build
	npm run preview

# Install dependencies
install:
	npm install

# Clean the build directory and node_modules
clean:
	rm -rf dist node_modules
