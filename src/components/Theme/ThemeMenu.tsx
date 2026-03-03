'use client'

import { themes } from '@/appData'
import useOutsideClick from '@/hooks/useOutsideClick'
import { CheckIcon, CloseIcon } from '@/utils/icons'
import { useEffect, useState } from 'react'

const ThemeMenu = () => {
  const [theme, setTheme] = useState<string>('dark')
  const [showThemeMenu, setShowThemeMenu] = useState(false)

  const menuRef = useOutsideClick(() => setShowThemeMenu(false))

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const changeTheme = (selectedTheme: string) => {
    setTheme(selectedTheme)
  }

  return (
    <div
      ref={menuRef}
      className="fixed right-6 bottom-4 z-50 md:right-11 md:bottom-11"
    >
      {/* Toggle Button */}
      <div
        onClick={() => setShowThemeMenu((prev) => !prev)}
        className="bg-neutral cursor-pointer rounded-full p-1.5 md:p-2"
      >
        <div className="bg-primary grid grid-cols-2 place-content-center gap-0.5 rounded-full p-1.5 md:p-2">
          <div className="size-[7px] rounded-t-full rounded-bl-full bg-[#B13753] md:size-[10px]" />
          <div className="size-[7px] rounded-t-full rounded-br-full bg-[#BAA32B] md:size-[10px]" />
          <div className="size-[7px] rounded-tl-full rounded-b-full bg-[#3178C6] md:size-[10px]" />
          <div className="size-[7px] rounded-tr-full rounded-b-full bg-[#50B359] md:size-[10px]" />
        </div>
      </div>

      {/* Theme Dropdown */}
      {showThemeMenu && (
        <div className="bg-secondary animate-fade-in border-border absolute right-0 bottom-full mb-5 space-y-3 rounded-xl border p-3 md:space-y-4 md:p-5">
          {/* Header */}
          <div className="text-primary-content border-border flex items-center justify-between border-b pb-3 md:pb-4">
            <span className="text-sm md:text-base">_select-theme</span>
            <CloseIcon
              onClick={() => setShowThemeMenu(false)}
              className="h-3 w-3 cursor-pointer md:h-4 md:w-4"
            />
          </div>

          {/* Theme Options */}
          {themes.map(({ name, colors }) => {
            const themeName = name.toLowerCase()

            return (
              <div
                key={name}
                onClick={() => changeTheme(themeName)}
                style={{
                  background: colors[0],
                  color: colors[1],
                }}
                className="flex min-w-48 cursor-pointer items-center justify-between rounded-lg p-2 transition-all hover:scale-[1.02] md:min-w-60 md:rounded-xl md:p-4"
              >
                <div className="flex items-end gap-1.5">
                  <CheckIcon
                    className={
                      themeName === theme ? 'block' : 'hidden'
                    }
                  />
                  <span className="text-sm md:text-base">{name}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  {colors.slice(1).map((color, idx) => (
                    <div
                      key={`${color}-${idx}`}
                      style={{ background: color }}
                      className="size-2 rounded-full md:size-3"
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ThemeMenu