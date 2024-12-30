import { renderHook, act } from '@testing-library/react'
import { useForm } from '../use-form'

describe('useForm', () => {
  const initialValues = {
    email: '',
    password: '',
  }

  const mockSubmit = vi.fn()

  it('initializes with correct values', () => {
    const { result } = renderHook(() =>
      useForm({
        initialValues,
        onSubmit: mockSubmit,
      })
    )

    expect(result.current.values).toEqual(initialValues)
    expect(result.current.errors).toEqual({})
    expect(result.current.isSubmitting).toBe(false)
  })

  it('updates values on change', () => {
    const { result } = renderHook(() =>
      useForm({
        initialValues,
        onSubmit: mockSubmit,
      })
    )

    act(() => {
      result.current.handleChange({
        target: { name: 'email', value: 'test@example.com' },
      } as any)
    })

    expect(result.current.values.email).toBe('test@example.com')
  })

  it('validates form before submission', async () => {
    const validate = (values: typeof initialValues) => {
      const errors: Partial<typeof initialValues> = {}
      if (!values.email) {
        errors.email = 'Email is required'
      }
      return errors
    }

    const { result } = renderHook(() =>
      useForm({
        initialValues,
        onSubmit: mockSubmit,
        validate,
      })
    )

    await act(async () => {
      await result.current.handleSubmit({ preventDefault: () => {} } as any)
    })

    expect(result.current.errors.email).toBe('Email is required')
    expect(mockSubmit).not.toHaveBeenCalled()
  })

  it('resets form correctly', () => {
    const { result } = renderHook(() =>
      useForm({
        initialValues,
        onSubmit: mockSubmit,
      })
    )

    act(() => {
      result.current.handleChange({
        target: { name: 'email', value: 'test@example.com' },
      } as any)
    })

    act(() => {
      result.current.resetForm()
    })

    expect(result.current.values).toEqual(initialValues)
    expect(result.current.errors).toEqual({})
  })
})
