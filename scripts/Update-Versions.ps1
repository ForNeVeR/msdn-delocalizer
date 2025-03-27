# SPDX-FileCopyrightText: 2025 msdn-delocalizer contributors <https://github.com/ForNeVeR/msdn-delocalizer>
#
# SPDX-License-Identifier: MIT

param (
    [Parameter(Mandatory)]
    [string] $NewVersion,

    $RepositoryRoot = "$PSScriptRoot/..",
    $PackageJson = "$RepositoryRoot/package.json",
    $ManifestSource = "$RepositoryRoot/wxt.config.ts"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

function updateJsonFile($path, $field) {
    $json = Get-Content -LiteralPath $path | ConvertFrom-Json
    $json.$field = $NewVersion
    $json | ConvertTo-Json | ForEach-Object {
        # Fix formatting: increase indent to 4 spaces instead of default 2
        $_.Split("`n") | ForEach-Object {
            $leadingSpaces = 0
            while ($leadingSpaces -lt $_.Length -and $_[$leadingSpaces] -eq ' ') {
                ++$leadingSpaces
            }
            $_.TrimEnd().Insert(0, ' ' * $leadingSpaces)
        }
    } | Set-Content -LiteralPath $path
}

function updateFileWithRegEx($path, $regex) {
    $content = Get-Content -Raw -LiteralPath $path
    if (!($content -match $regex)) {
        throw "Cannot find regex `"$regex`" in file `"$path`"."
    }

    $replacement = $Matches[0] -replace $Matches[1], $NewVersion
    $newContent = $content -replace $Matches[0], $replacement
    Set-Content -LiteralPath $path $newContent -NoNewline
}

updateJsonFile $PackageJson 'version'
updateFileWithRegEx $ManifestSource 'version: "([^"]*)"'
