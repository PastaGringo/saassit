import { render, screen } from '@testing-library/react'
import { BaseLayout } from '../base-layout'
import { useAppStore } from '@/lib/store'

// Mock du store Zustand
vi.mock('@/lib/store', () => ({
  useAppStore: vi.fn(),
}))

describe('BaseLayout', () => {
  beforeEach(() => {
    (useAppStore as any).mockImplementation(() => ({
      isLoading: false,
      error: null,
    }))
  })

  it('renders children correctly', () => {
    render(
      <BaseLayout>
        <div>Test Content</div>
      </BaseLayout>
    )
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('shows loading spinner when loading', () => {
    (useAppStore as any).mockImplementation(() => ({
      isLoading: true,
      error: null,
    }))

    render(
      <BaseLayout>
        <div>Test Content</div>
      </BaseLayout>
    )
    
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('shows error message when there is an error', () => {
    const errorMessage = 'Test error message'
    ;(useAppStore as any).mockImplementation(() => ({
      isLoading: false,
      error: errorMessage,
    }))

    render(
      <BaseLayout>
        <div>Test Content</div>
      </BaseLayout>
    )
    
    expect(screen.getByText(errorMessage)).toBeInTheDocument()
  })
})
