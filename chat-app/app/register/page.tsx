
"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

import Link from "next/link"
import { Loader2 } from "lucide-react"
import api from "@/utils/api"

export default function Register() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    api: "",
  })
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      router.push("/")
    }
  }, [router])

  const validateForm = () => {
    const newErrors = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      api: "",
    }

    if (!username.trim()) newErrors.username = "Username is required"
    if (!email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email format"
    if (!password) newErrors.password = "Password is required"
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters"
    if (!confirmPassword) newErrors.confirmPassword = "Confirm your password"
    else if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match"

    setErrors(newErrors)
    return Object.values(newErrors).every((error) => error === "")
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setLoading(true)

    try {
      const response = await api.post("/api/auth/local/register", {
        email,
        username,
        password,
      })
      const { jwt, user } = response.data
      localStorage.setItem("token", jwt)
      localStorage.setItem("user", JSON.stringify(user))
      router.push("/")
    } catch (error) {
      const errorMessage = error?.response?.data?.error?.message || "Registration failed."
      setErrors({
        ...errors,
        api: errorMessage,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#FAFAFA] dark:bg-gray-900">
      

      <div className="w-full max-w-md text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Create Account</h1>
        <p className="text-muted-foreground">Sign up to get started</p>
      </div>

      <form
        onSubmit={handleRegister}
        className="w-full max-w-md space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
      >
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="h-12"
          />
          {errors.username && <p className="text-sm text-red-500">{errors.username}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12"
          />
          {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="h-12"
          />
          {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
        </div>

        {errors.api && (
          <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm">
            {errors.api}
          </div>
        )}

        <Button type="submit" className="w-full h-12 text-base bg-primary hover:bg-primary/90" disabled={loading}>
          {loading ? <Loader2 className="animate-spin mr-2" size={20} /> : "Create account"}
        </Button>

        <p className="text-sm text-center text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:text-primary/90 font-medium">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  )
}

